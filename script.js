// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const header = document.querySelector('.site-header');

    // Fonction pour ouvrir le menu
    const openMenu = () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        menuToggle.setAttribute('aria-expanded', 'true');
    };

    // Fonction pour fermer le menu
    const closeMenuHandler = () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    // Gestionnaires d'événements pour le menu
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuHandler);

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenuHandler();
        }
    });

    // Gestion des langues
    const languageLinks = document.querySelectorAll('.language-nav a');
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            languageLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Effet de scroll pour le header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll vers le bas
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll vers le haut
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});