/**
 * ANVESHAK Supabase Configuration
 * Replace the placeholders with your actual Supabase credentials.
 */

// Supabase Connection Details
const SUPABASE_URL = 'https://cmueggauhoiscywndpbu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jje03k0WQ-iweKGf_4HIoQ_-8Q0iomQ';

// Initialize the Supabase Client
// Note: Ensure you have included the Supabase CDN in your HTML:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
window.supabaseClient = client;

console.log('Anveshak: Supabase Client Initialized');
