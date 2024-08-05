const nav_hamburguer = document.querySelector(".nav__hamburguer");
const nav_overlay = document.querySelector(".nav__overlay");
const nav_menu = document.querySelector(".nav__menu");

nav_hamburguer.addEventListener("click", () => {
  nav_hamburguer.classList.toggle("nav__hamburguer--open");
  nav_overlay.classList.toggle("nav__overlay--show");
  nav_menu.classList.toggle("nav__menu--show");
});

const social_desktop = document.querySelector(".social-desktop");
const social_mobile = document.querySelector(".social-mobile");

window.onload = function () {
  if (window.innerWidth >= 768) {
    social_mobile.classList.toggle("no-visible");
  } else {
    social_desktop.classList.toggle("no-visible");
  }
};
