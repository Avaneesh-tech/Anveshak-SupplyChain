class App {
    constructor() {
        this.initTestData();
    }

    initTestData() {
        let usersStr = localStorage.getItem('users');
        if (!usersStr) {
            const users = {
                processing: {},
                logistics: {},
                admin: {
                    'admin': { password: 'admin', data: {} }
                }
            };
            
            // Add 5 test users for processing
            for(let i=1; i<=5; i++) {
                users.processing[`user${i}`] = { password: 'pass123', data: {} };
            }
            
            // Add 5 test users for logistics
            for(let i=1; i<=5; i++) {
                users.logistics[`logistics${i}`] = { password: 'pass123', data: {} };
            }
            
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const users = JSON.parse(usersStr);
            if (!users.admin) {
                users.admin = { 'admin': { password: 'admin', data: {} } };
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
        
        if (!localStorage.getItem('farmers')) {
            localStorage.setItem('farmers', JSON.stringify([]));
        }
    }

    register(role, username, password, redirectUrl) {
        const users = JSON.parse(localStorage.getItem('users'));
        
        if (users[role][username]) {
            alert('Username already exists! Please choose another.');
            return false;
        }
        
        users[role][username] = { password: password, data: {} };
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Registration successful! Please login.');
        window.location.href = redirectUrl;
        return true;
    }

    login(role, username, password, redirectUrl) {
        const users = JSON.parse(localStorage.getItem('users'));
        
        if (users[role] && users[role][username]) {
            if (users[role][username].password === password) {
                // Success
                window.location.href = redirectUrl;
                return true;
            } else {
                alert('Invalid password!');
                return false;
            }
        } else {
            alert('User not found!');
            return false;
        }
    }
    
    registerFarmer(name, place, crop) {
        const farmers = JSON.parse(localStorage.getItem('farmers')) || [];
        farmers.push({ name: name, place: place || 'Unknown', crop: crop || 'Unknown', date: new Date().toISOString() });
        localStorage.setItem('farmers', JSON.stringify(farmers));
        
        alert('Registration successful!');
        window.location.href = '../index.html';
    }

    loadAdminData() {
        const users = JSON.parse(localStorage.getItem('users')) || { processing: {}, logistics: {} };
        const farmers = JSON.parse(localStorage.getItem('farmers')) || [];
        
        // Populate Processors
        const procTable = document.getElementById('admin-processors-table');
        if (procTable) {
            procTable.innerHTML = '';
            Object.keys(users.processing).forEach(id => {
                procTable.innerHTML += `<tr><td>${id}</td><td>Active</td></tr>`;
            });
        }
        
        // Populate Logistics
        const logTable = document.getElementById('admin-logistics-table');
        if (logTable) {
            logTable.innerHTML = '';
            Object.keys(users.logistics).forEach(id => {
                logTable.innerHTML += `<tr><td>${id}</td><td>Active</td></tr>`;
            });
        }
        
        // Populate Farmers
        const farmerTable = document.getElementById('admin-farmers-table');
        if (farmerTable) {
            farmerTable.innerHTML = '';
            farmers.forEach(f => {
                farmerTable.innerHTML += `<tr><td>${f.name}</td><td>${f.place}</td><td>${f.crop}</td></tr>`;
            });
        }
        
        // Populate Stats
        const statProc = document.getElementById('stat-proc');
        if (statProc) statProc.innerText = Object.keys(users.processing).length;
        
        const statLog = document.getElementById('stat-log');
        if (statLog) statLog.innerText = Object.keys(users.logistics).length;
        
        const statFarm = document.getElementById('stat-farm');
        if (statFarm) statFarm.innerText = farmers.length;
    }

    connectWallet(inputId) {
        const input = document.getElementById(inputId);
        if (!input) return;
        const button = input.nextElementSibling;
        
        button.innerText = 'Connecting...';
        button.disabled = true;

        setTimeout(() => {
            const randomAddress = '0x' + Math.random().toString(16).substr(2, 40);
            input.value = randomAddress;
            button.innerText = 'Connected';
            button.classList.remove('btn-outline');
            button.classList.add('btn-primary');
            input.readOnly = true;
        }, 1500);
    }
}

// Initialize application
const app = new App();
