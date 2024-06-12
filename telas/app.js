document.addEventListener('DOMContentLoaded', function() {
    // Create modal elements
    const modal = document.createElement('div');
    modal.id = 'config-modal';
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Configurações</h2>
            <button id="light-theme">Tema Claro</button>
            <button id="dark-theme">Tema Escuro</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Get elements
    const configButton = document.getElementById('config');
    const closeModal = modal.querySelector('.close');
    const lightThemeButton = document.getElementById('light-theme');
    const darkThemeButton = document.getElementById('dark-theme');
    const header = document.getElementById('main-header');
    const p = document.getElementById('importante');
    const perfilImg = document.getElementById('perfil');
    const loginPopup = document.getElementById('login-popup');
    const closeBtn = loginPopup.querySelector('.close-btn');
    const nameDiv = document.getElementById('name');
    const clearLoginButton = document.getElementById('clear-login');

    // Function to open modal
    configButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Function to close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Change to light theme
    lightThemeButton.addEventListener('click', function() {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        header.classList.add('light-theme');
        header.classList.remove('dark-theme');
        p.classList.add('light-theme');
        p.classList.remove('dark-theme');
        modal.style.display = 'none';
    });

    // Change to dark theme
    darkThemeButton.addEventListener('click', function() {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        header.classList.add('dark-theme');
        header.classList.remove('light-theme');
        p.classList.add('dark-theme');
        p.classList.remove('light-theme');
        modal.style.display = 'none';
    });

    // Function to open login popup
    perfilImg.addEventListener('click', () => {
        openLoginPopup();
    });

    // Function to close login popup
    closeBtn.addEventListener('click', () => {
        closeLoginPopup();
    });

    // Close login popup when clicking outside of the popup content
    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            closeLoginPopup();
        }
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));

        // Close login popup
        closeLoginPopup();

        // Update UI with username
        updateUserUI();
    });

    // Clear login information
    clearLoginButton.addEventListener('click', function() {
        localStorage.removeItem('user');
        alert('Login removido. Por favor, faça login novamente.');
        openLoginPopup();
        nameDiv.textContent = 'Olá, faça login';
    });

    // Check if user is stored in localStorage
    function checkUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            updateUserUI();
        } else {
            // If no user is found, prompt for login
            alert('Você precisa fazer login primeiro.');
            openLoginPopup();
        }
    }

    // Update UI with username
    function updateUserUI() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            nameDiv.textContent = `Olá ${user.username}`;
        }
    }

    // Open login popup with blur
    function openLoginPopup() {
        loginPopup.style.display = 'block';
        document.body.classList.add('blurred');
    }

    // Close login popup and remove blur
    function closeLoginPopup() {
        loginPopup.style.display = 'none';
        document.body.classList.remove('blurred');
    }

    // Initial check for user
    checkUser();
});
