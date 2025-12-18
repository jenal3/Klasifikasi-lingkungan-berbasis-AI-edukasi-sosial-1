let isLoggedIn = false;

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function login() {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim().toLowerCase();
    const errorMsg = document.getElementById('errorMsg');

    if (username && password === 'soshum') {
        isLoggedIn = true;
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('contentPage').style.display = 'block';
        document.getElementById('header').style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }
}

function goToLogin() {
    logout();
    document.getElementById('contentPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('header').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function logout() {
    isLoggedIn = false;
    document.getElementById('menu').classList.remove('show');
}

// Enter key support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('menu');
    const btn = document.querySelector('.menu-btn');
    if (btn && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});
