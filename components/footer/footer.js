// Esta función carga el contenido del archivo footer.html
// y lo inserta dentro del contenedor con id="footer-placeholder"
function loadFooter() {

  // fetch obtiene el archivo externo (footer.html)
  fetch("./components/footer/footer.html")

    // Convierte la respuesta en texto HTML
    .then(response => response.text())

    // Inserta ese HTML dentro del div donde irá el footer
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
}

// Ejecuta la carga del footer cuando la página termina de cargarse
document.addEventListener("DOMContentLoaded", loadFooter);
