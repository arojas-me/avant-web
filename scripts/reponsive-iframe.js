

document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.getElementById("hero-text");
    const heroViewer = document.getElementById("hero-viewer");

    // Detectar si es móvil
    function isMobile() {
      return window.innerWidth <= 768;
    }

    // Solo mover si estamos en móvil
    if (isMobile() && heroText && heroViewer) {
      // Mover el viewer justo después del hero-text
      heroText.insertAdjacentElement("afterend", heroViewer);
    }
  });

