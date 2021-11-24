const closeButton = document.querySelector(".closeNav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigationOpen");
});
