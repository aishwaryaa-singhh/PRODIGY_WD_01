document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#f39c12';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
});

