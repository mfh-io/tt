// Animasi elemen saat halaman digulir
const animatedElements = document.querySelectorAll(
    '.section, .info-card'
);

animatedElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(25px)';
    element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach((element) => {
    observer.observe(element);
});
