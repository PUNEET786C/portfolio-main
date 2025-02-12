
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const logo = document.getElementById('logo');

    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    logo.classList.toggle('active');
    
}