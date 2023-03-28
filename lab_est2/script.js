// Obtiene elementos del DOM
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Función para abrir o cerrar el menú hamburguesa
function toggleMenu() {
  menu.classList.toggle('show');
}

// Event listener para el menú hamburguesa
hamburger.addEventListener('click', toggleMenu);
