// Obtiene el checkbox que controla el menú
const toggle = document.getElementById('menu-toggle');

// Selecciona todos los enlaces dentro del menú desplegable
document.querySelectorAll('.menu a').forEach(link => {
  
  // A cada enlace le agrega un evento al hacer clic
  link.addEventListener('click', () => {
    
    // Desmarca el checkbox para cerrar el menú
    toggle.checked = false;
  });
});

