const menuToggle = document.querySelector(".menu-toggle");
const dashboardItems = document.querySelector(".small-flex-container");

menuToggle.addEventListener("click", () => {
  dashboardItems.classList.toggle("open");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("change");
});