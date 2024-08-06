// MENU ---------------------------------------------------------------
const nav_hamburguer = document.querySelector(".nav__hamburguer");
const nav_overlay = document.querySelector(".nav__overlay");
const nav_menu = document.querySelector(".nav__menu");

nav_hamburguer.addEventListener("click", () => {
  nav_hamburguer.classList.toggle("nav__hamburguer--open");
  nav_overlay.classList.toggle("nav__overlay--show");
  nav_menu.classList.toggle("nav__menu--show");
});
