// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal animations on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});