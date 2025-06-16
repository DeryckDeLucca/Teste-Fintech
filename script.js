// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do DOM
    const modal = document.getElementById('devModal');
    const linksDev = document.querySelectorAll('.dev-link');
    const closeButton = document.querySelector('.close-button');

    // Função para abrir o modal
    const openModal = () => {
        modal.style.display = 'flex';
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Adiciona um evento de clique a cada link que deve abrir o modal
    linksDev.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link (que seria navegar para '#')
            event.preventDefault(); 
            openModal();
        });
    });

    // Adiciona um evento de clique ao botão de fechar (o 'X')
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Adiciona um evento de clique para fechar o modal se o usuário clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});