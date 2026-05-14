/**
 * ANVESHAK CORE ENGINE
 * Handles Auth, Sessions, Blockchain Simulation, and Global UI
 */

class AnveshakCore {
    constructor() {
        this.currentUser = null;
        this.initTheme();
        this.initSession();
    }

    async initSession() {
        const { data: { session } } = await window.supabaseClient.auth.getSession();
        this.updateUserFromSession(session);

        // Listen for auth changes
        window.supabaseClient.auth.onAuthStateChange((_event, session) => {
            this.updateUserFromSession(session);
        });
    }

    async updateUserFromSession(session) {
        if (session) {
            try {
                const { data: profile, error } = await window.supabaseClient
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();

                // If profile doesn't exist, create it
                if (error && error.code === 'PGRST116') {
                    console.warn('Profile not found, creating default profile');
                    await window.supabaseClient.from('profiles').insert([{
                        id: session.user.id,
                        username: session.user.email.split('@')[0],
                        full_name: session.user.user_metadata?.full_name || 'User',
                        role: session.user.user_metadata?.role || 'buyer',
                        is_approved: false
                    }]);
                } else if (error) {
                    console.error('Profile fetch error:', error);
                }

                this.currentUser = {
                    id: session.user.id,
                    email: session.user.email,
                    role: profile?.role || session.user.user_metadata?.role || 'buyer',
                    name: profile?.full_name || session.user.user_metadata?.full_name || 'User',
                    isApproved: profile?.is_approved || false,
                    loginTime: session.user.last_sign_in_at
                };
            } catch (err) {
                console.error('Session update error:', err);
                this.currentUser = {
                    id: session.user.id,
                    email: session.user.email,
                    role: session.user.user_metadata?.role || 'buyer',
                    name: session.user.user_metadata?.full_name || 'User',
                    isApproved: false,
                    loginTime: session.user.last_sign_in_at
                };
            }
        } else {
            this.currentUser = null;
        }
    }

    // AUTHENTICATION
    async login(email, password) {
        try {
            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Fetch profile to check role
            const { data: profile, error: profileError } = await window.supabaseClient
                .from('profiles')
                .select('role, is_approved')
                .eq('id', data.user.id)
                .single();

            if (profileError) throw profileError;

            // Note: Users can now access dashboards without approval per USER feedback
            return { success: true, role: profile.role, isApproved: profile.is_approved };
        } catch (error) {
            console.error('Login error:', error.message);
            return { success: false, message: error.message };
        }
    }

    async signup(userData) {
        try {
            const { data, error } = await window.supabaseClient.auth.signUp({
                email: userData.email,
                password: userData.password,
                options: {
                    data: {
                        username: userData.username,
                        full_name: userData.name,
                        role: userData.role,
                        wallet: userData.wallet
                    }
                }
            });

            if (error) throw error;

            // Create profile record in profiles table
            const { error: profileError } = await window.supabaseClient
                .from('profiles')
                .insert([{
                    id: data.user.id,
                    username: userData.username,
                    full_name: userData.name,
                    role: userData.role,
                    is_approved: false
                }]);

            if (profileError) {
                console.warn('Profile creation warning:', profileError.message);
                // Don't throw - account was created successfully
            }

            return { success: true };
        } catch (error) {
            console.error('Signup error:', error.message);
            return { success: false, message: error.message };
        }
    }

    async logout() {
        try {
            await window.supabaseClient.auth.signOut();
        } catch (err) {
            console.log('Logout error (non-critical):', err.message);
        }
        this.currentUser = null;
        // Redirect to home - use protocol + host to ensure absolute URL
        window.location.href = window.location.origin + '/index.html';
    }

    async checkAccess(allowedRoles = []) {
        const { data: { session } } = await window.supabaseClient.auth.getSession();

        if (!session) {
            // Redirect if in dashboard
            if (window.location.pathname.includes('/dashboards/')) {
                window.location.href = '../../login.html';
            }
            return;
        }

        await this.updateUserFromSession(session);

        if (!this.currentUser) {
            if (window.location.pathname.includes('/dashboards/')) {
                window.location.href = '../../login.html';
            }
            return;
        }

        if (allowedRoles.length > 0 && !allowedRoles.includes(this.currentUser.role)) {
            console.warn('Access Denied: User role', this.currentUser.role, 'not in allowed roles', allowedRoles);
            window.location.href = '../../index.html';
        }
    }

    // DATA OPERATIONS
    async getBatches(filters = {}) {
        let query = window.supabaseClient
            .from('batches')
            .select('*, profiles(full_name)');

        if (filters.createdBy) query = query.eq('created_by', filters.createdBy);
        if (filters.status) query = query.eq('status', filters.status);
        if (filters.batchNumber) query = query.eq('batch_number', filters.batchNumber);

        const { data, error } = await query.order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    }

    async createBatch(batchData) {
        const { data, error } = await window.supabaseClient
            .from('batches')
            .insert([{
                ...batchData,
                created_by: this.currentUser.id,
                blockchain_tx_hash: this.registerOnBlockchain(batchData)
            }]);
        
        if (error) throw error;
        await this.logEvent('Batch Creation', `Batch ${batchData.batch_number} initialized.`);
        return data;
    }

    async getAuditLogs() {
        const { data, error } = await window.supabaseClient
            .from('audit_logs')
            .select('*, profiles(full_name)')
            .order('created_at', { ascending: false })
            .limit(10);
        
        if (error) throw error;
        return data;
    }

    async logEvent(type, description) {
        if (!this.currentUser) return;
        await window.supabaseClient
            .from('audit_logs')
            .insert([{
                event_type: type,
                description: description,
                performed_by: this.currentUser.id
            }]);
    }

    async getSystemStats() {
        const { count: userCount } = await window.supabaseClient.from('profiles').select('*', { count: 'exact', head: true });
        const { count: batchCount } = await window.supabaseClient.from('batches').select('*', { count: 'exact', head: true });
        const { count: pendingCount } = await window.supabaseClient.from('profiles').select('*', { count: 'exact', head: true }).eq('is_approved', false);
        return { userCount, batchCount, pendingCount };
    }

    // ADMIN METHODS
    async getPendingRegistrations() {
        const { data, error } = await window.supabaseClient
            .from('profiles')
            .select('*')
            .eq('is_approved', false)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    }

    async approveUser(userId) {
        const { data, error } = await window.supabaseClient
            .from('profiles')
            .update({ is_approved: true })
            .eq('id', userId);
        if (error) throw error;
        await this.logEvent('User Approval', `User ${userId} approved.`);
        return data;
    }

    // SUPPLY CHAIN EVENTS
    async addEvent(eventData) {
        const { data, error } = await window.supabaseClient
            .from('supply_chain_events')
            .insert([{
                ...eventData,
                performed_by: this.currentUser.id,
                blockchain_tx_hash: this.registerOnBlockchain(eventData)
            }]);
        if (error) throw error;
        await this.logEvent('Event Logged', `${eventData.event_type} for batch ${eventData.batch_id}`);
        return data;
    }

    async getEvents(batchId) {
        const { data, error } = await window.supabaseClient
            .from('supply_chain_events')
            .select('*, profiles(full_name)')
            .eq('batch_id', batchId)
            .order('created_at', { ascending: true });
        if (error) throw error;
        return data;
    }

    // BLOCKCHAIN SIMULATION
    connectWallet() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const walletAddress = '0x' + Math.random().toString(16).substr(2, 40);
                resolve(walletAddress);
            }, 1000);
        });
    }

    registerOnBlockchain(data) {
        const txHash = '0x' + Math.random().toString(16).substr(2, 64);
        console.log('Blockchain Transaction:', txHash, data);
        return txHash;
    }

    // UI UTILS
    initTheme() {
        const isDark = localStorage.getItem('anveshak_theme') === 'dark';
        if (isDark) document.body.classList.add('dark-mode');
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('anveshak_theme', currentTheme);
    }
}

const core = new AnveshakCore();

// Global interactions
document.addEventListener('DOMContentLoaded', () => {
    // User session UI updates
    const updateUI = () => {
        const authBtn = document.querySelector('.auth-btn');
        if (authBtn && core.currentUser) {
            authBtn.innerHTML = `Dashboard (${core.currentUser.role})`;
            authBtn.href = `dashboards/${core.currentUser.role}/dashboard.html`;
        }

        // Global Approval Status Badge
        const badge = document.getElementById('approval-status');
        if (badge && core.currentUser) {
            badge.style.display = 'inline-block';
            if (core.currentUser.isApproved) {
                badge.innerText = 'Approved';
                badge.style.background = 'rgba(16, 185, 129, 0.1)';
                badge.style.color = '#10b981'; // Success
            } else {
                badge.innerText = 'Pending Approval';
                badge.style.background = 'rgba(245, 158, 11, 0.1)';
                badge.style.color = '#f59e0b'; // Warning
            }
        }
    };

    // Initial check
    setTimeout(updateUI, 500); 
});
