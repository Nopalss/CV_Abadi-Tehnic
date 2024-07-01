const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const sr = ScrollReveal({
  distance: "40px",
  duration: 2050,
  delay: 200,
  reset: true,
});

sr.reveal(".home", { origin: "top" });
sr.reveal(".container", { origin: "bottom" });
sr.reveal(".about", { origin: "left" });
sr.reveal(".shop", { origin: "top" });
sr.reveal(".review", { origin: "top" });
sr.reveal(".contact", { origin: "bottom" });









