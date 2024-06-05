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
    const p = document.getElementById('importante')

    // Open modal on config button click
    configButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal on close button click
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
});
