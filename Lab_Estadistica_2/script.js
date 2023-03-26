// Esperamos a que cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos la barra de navegación
  const navBar = document.querySelector('.navbar');

  // Obtenemos todos los elementos de la barra de navegación
  const navItems = navBar.querySelectorAll('.nav-item');

  // Recorremos los elementos de la barra de navegación
  navItems.forEach(function (item) {
    // Añadimos un event listener al hacer clic en el elemento
    item.addEventListener('click', function (event) {
      // Prevenimos la acción por defecto del elemento
      event.preventDefault();

      // Obtenemos el href del elemento clicado
      const target = this.getAttribute('href');

      // Obtenemos la posición de la sección a la que se debe desplazar
      const targetPosition = document.querySelector(target).offsetTop;

      // Realizamos la animación de desplazamiento suave
      window.scroll({
        top: targetPosition - navBar.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
});
// Desplazamiento suave al hacer clic en los enlaces del menú de navegación
const navLinks = document.querySelectorAll('.navbar-menu a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const topOffset = 70; // Altura de la barra de navegación
    const targetPosition = target.offsetTop - topOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    toggleMenu();
  });
});

// Animación del menú hamburguesa
const toggleMenu = () => {
  const menuToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  menuToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
};

const menuToggle = document.querySelector('.navbar-toggle');
menuToggle.addEventListener('click', toggleMenu);
