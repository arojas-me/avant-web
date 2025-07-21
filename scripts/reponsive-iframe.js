

document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.getElementById("hero-text");
    const heroViewer = document.getElementById("hero-viewer");

    function isMobile() {
      return window.innerWidth <= 768;
    }

    if (isMobile() && heroText && heroViewer) {

      heroText.insertAdjacentElement("afterend", heroViewer);
    }
  });

