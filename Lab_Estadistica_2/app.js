// Mantener la barra de navegación fija al hacer scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});
