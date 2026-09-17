document.addEventListener('DOMContentLoaded', () => {
  // Navigation avec effet lors du défilement
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Gestion du menu mobile Hamburger
  const menuToggle = document.getElementById('menuToggle');
  const navigation = document.getElementById('navigation');

  menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });

  // Fermer le menu au clic sur un lien
  document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('active');
    });
  });
});
