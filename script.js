// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
            end: 'bottom center',
        }
    });

    // Product items animation
    gsap.from('.product-item', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#produits',
            start: 'top center',
            end: 'bottom center',
        }
    });

    // Project slider
    const projectSlider = new Swiper('.project-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});