// Módulo autoejecutable para manejar la carga del footer
(function () {

  // Función que se encarga de cargar el footer
  function loadFooter() {

    // Busca el contenedor donde se insertará el footer
    const footer = document.getElementById("footer-placeholder");

    // Si el contenedor no existe, se corta la ejecución
    // Esto evita errores en páginas que no tengan footer
    if (!footer) return;

    // Obtiene el HTML del footer desde la carpeta components
    fetch("/components/footer/footer.html")

      // Convierte la respuesta en texto HTML
      .then(response => response.text())

      // Inserta el HTML dentro del contenedor del footer
      .then(html => {
        footer.innerHTML = html;
      })

      // Captura y muestra cualquier error de carga
      .catch(error => {
        console.error("Error cargando el footer:", error);
      });
  }

  // Espera a que el DOM esté completamente cargado
  // antes de ejecutar la carga del footer
  document.addEventListener("DOMContentLoaded", loadFooter);

})();
