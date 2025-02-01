document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');
    const slideInRightElements = document.querySelectorAll('.slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    slideInLeftElements.forEach(element => {
        observer.observe(element);
    });

    slideInRightElements.forEach(element => {
        observer.observe(element);
    });
});