// Dynamic Year Update
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = '0.8s ease-out';
    observer.observe(section);
});

// Scroll Reveal CSS addition via JS
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});