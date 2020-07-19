const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");

menuToggle.addEventListener("click", () => {
  navItems.classList.toggle("open");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("change");
});