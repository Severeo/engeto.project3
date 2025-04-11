document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('themeToggle');
    const toggleIcon = toggle.querySelector('i');
    const body = document.body;
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('backToTop');
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        if (body.classList.contains('dark')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    });
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.getElementById('passwordForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const pass1 = document.getElementById('pass1').value;
        const pass2 = document.getElementById('pass2').value;
        const message = document.getElementById('passMessage');
        if (pass1 === pass2) {
            message.textContent = 'Hesla se shodují';
            message.style.color = 'green';
        } else {
            message.textContent = 'Hesla se neshodují';
            message.style.color = 'red';
        }
    });
    const galleryImages = Array.from(document.querySelectorAll('#gallery .gallery img'));
    const miniGalleryContainer = document.querySelector('.mini-gallery .gallery-preview');
    if (galleryImages.length > 0 && miniGalleryContainer) {
        const shuffled = galleryImages.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        selected.forEach(img => {
            const clone = img.cloneNode(true);
            miniGalleryContainer.appendChild(clone);
        });
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
});
