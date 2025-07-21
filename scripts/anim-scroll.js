document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.2, // Ajusta este valor según cuánto del elemento debe estar visible antes de activar la clase
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Remover esta línea si deseas que la animación se active siempre al hacer scroll
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));
});
