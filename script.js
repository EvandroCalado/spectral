const abreMenu = document.querySelector(".menu-hamburguer");
const fechaMenu = document.querySelector(".header-top-menu-slide-fecha");
const slideMenu = document.querySelector(".header-top-menu-slide");
const container = document.querySelector(".container");

abreMenu.addEventListener("click", () => {
  slideMenu.classList.add("slide");
  container.style.backgroundBlendMode = "color";
  container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

fechaMenu.addEventListener("click", () => {
  slideMenu.classList.remove("slide");
  container.style.backgroundBlendMode = "";
  container.style.backgroundColor = "black";
});
