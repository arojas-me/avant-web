document.addEventListener("scroll", () => {
  const banner = document.querySelector(".parallax-banner");
  const scrollPos = window.scrollY;
  banner.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});