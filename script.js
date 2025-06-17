document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('devModal');
    const linksDev = document.querySelectorAll('.dev-link');
    const closeButton = document.querySelector('.close-button');

    const openModal = () => {
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    linksDev.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            openModal();
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});