// Mengatur fungsionalitas hamburger menu untuk tampilan HP
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // Menambah atau menghapus class 'active' untuk memunculkan menu
    navLinks.classList.toggle('active');
});

// Menutup menu mobile secara otomatis ketika salah satu link diklik
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Efek pada navbar ketika halaman di-scroll (menambahkan bayangan)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});