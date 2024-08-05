// MENU ---------------------------------------------------------------
const nav_hamburguer = document.querySelector(".nav__hamburguer");
const nav_overlay = document.querySelector(".nav__overlay");
const nav_menu = document.querySelector(".nav__menu");

nav_hamburguer.addEventListener("click", () => {
  nav_hamburguer.classList.toggle("nav__hamburguer--open");
  nav_overlay.classList.toggle("nav__overlay--show");
  nav_menu.classList.toggle("nav__menu--show");
});

// Add and remove has-text class  ---------------------------------------------------------------
const form_input = document.querySelectorAll(".form__input");
const group_container = document.querySelector(".group__container");

form_input.forEach((input) => {
  input.addEventListener("input", function () {
    const groupContainer = input.closest(".group__container");

    if (input.value.trim() !== "") {
      groupContainer.classList.add("has-text");
    } else {
      groupContainer.classList.remove("has-text");
    }
  });
});

// Add and remove no-visible class and change type of input ---------------------------------------------------------------
const input_pass = document.querySelector(".input--pass");
const on_icon = document.querySelector(".visibility--icon");
const off_icon = document.querySelector(".visibilityoff--icon");

const toggleVisibility = () => {
  if (input_pass.type === "password") {
    input_pass.type = "text";
    off_icon.classList.add("no-visible");
    on_icon.classList.remove("no-visible");
  } else {
    input_pass.type = "password";
    off_icon.classList.remove("no-visible");
    on_icon.classList.add("no-visible");
  }
};

[on_icon, off_icon].forEach((icon) => {
  icon.addEventListener("click", toggleVisibility);
});

// Validations -----------------------------------------------------------------------

const user__input = document.getElementById("user");
const email__input = document.getElementById("email");
const password__input = document.getElementById("password");
const form_button = document.querySelector(".form__button");
const form = document.querySelector(".form");
let validations = document.querySelector(".validations");
let group_user = document.querySelector(".group__container--user");
let group_email = document.querySelector(".group__container--email");
let group_pass = document.querySelector(".group__container--pass");

// email -----------
function validateUserF() {
  let valid = true;

  if (!user__input.value.trim()) {
    createValidation("Debe rellenar el campo de nombre de usuario.");
    valid = false;
  } else if (user__input.value.length < 3 || user__input.value.length > 20) {
    createValidation(
      "El nombre de usuario debe contener entre 3 y 20 caracteres."
    );
    valid = false;
  } else if (!/^[a-zA-Z0-9]+$/.test(user__input.value)) {
    createValidation(
      "El nombre de usuario solo puede contener letras y números."
    );
    valid = false;
  }

  return valid;
}

// email -----------
function validateEmailF() {
  let valid = true;

  if (!email__input.value.trim()) {
    createValidation("Debe rellenar el campo de correo electrónico.");
    valid = false;
  } else if (!validateEmailRegular(email__input.value)) {
    createValidation(
      "El formato del correo electrónico es incorrecto, ejem: ejemplo@gmail.com"
    );
    valid = false;
  }

  return valid;
}

function validateEmailRegular(email) {
  // Expresión regular para validar el formato del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// password -----------
function validatePasswordF() {
  let valid = true;

  if (!password__input.value.trim()) {
    createValidation("Debe rellenar el campo de contraseña.");
    valid = false;
  } else if (
    password__input.value.length < 6 ||
    password__input.value.length > 15
  ) {
    createValidation(
      "La contraseña debe contener mínimo 6 caracteres y máximo 15."
    );
    valid = false;
  } else if (!/\d/.test(password__input.value)) {
    createValidation("La contraseña debe contener al menos un número.");
    valid = false;
  }

  return valid;
}

// main-function -----------
const validationOfFields = (e) => {
  e.preventDefault();
  validations.classList.add("no-visible");

  validations.innerHTML = "";
  const validateUser = validateUserF();
  const validateEmail = validateEmailF();
  const validatePassword = validatePasswordF();

  if (!validateUser) {
    group_user.classList.add("group__container--invalid");
    group_user.classList.remove("group__container--valid");
  } else {
    group_user.classList.remove("group__container--invalid");
    group_user.classList.add("group__container--valid");
  }

  if (!validateEmail) {
    group_email.classList.add("group__container--invalid");
    group_email.classList.remove("group__container--valid");
  } else {
    group_email.classList.remove("group__container--invalid");
    group_email.classList.add("group__container--valid");
  }

  if (!validatePassword) {
    group_pass.classList.add("group__container--invalid");
    group_pass.classList.remove("group__container--valid");
  } else {
    group_pass.classList.remove("group__container--invalid");
    group_pass.classList.add("group__container--valid");
  }

  if (validateEmail && validatePassword && validateUser) {
    form.submit();
  } else {
    validations.classList.remove("no-visible");
  }
};

// create validation element -----------
function createValidation(str) {
  let validation = document.createElement("p");
  validation.classList.add("validation");
  validation.innerText = str;
  validations.appendChild(validation);
}

// add event click -----------
form_button.addEventListener("click", validationOfFields);
