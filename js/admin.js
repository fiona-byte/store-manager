const menuToggle = document.querySelector(".menu-toggle");
const dashboardItems = document.querySelector(".small-flex-container");
const openModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const modalContainer = document.querySelector(".create-container");

menuToggle.addEventListener("click", () => {
  dashboardItems.classList.toggle("open");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("change");
});


//Create products Modal

//open modal
openModal.addEventListener("click", () => {
  modalContainer.classList.add("open-modal");
});

//close modal

closeModal.addEventListener("click", () => {

  if (modalContainer.classList.contains("open-modal")) {
    modalContainer.classList.remove("open-modal");
    // modalContainer.classList.add("remove-modal");
  }

});
