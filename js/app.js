const hamburger_open_btn = document.querySelector(".header__menu-btn");
const hamburger_close_btn = document.querySelector(".nav__close-btn");
const hamburger_nav = document.querySelectorAll(".nav");

hamburger_open_btn.addEventListener("click", () => {
  hamburger_nav.forEach((nav_el) => {
    nav_el.classList.add("nav__visible");
  });
});

hamburger_close_btn.addEventListener("click", () => {
  hamburger_nav.forEach((nav_el) => {
    nav_el.classList.remove("nav__visible");
  });
});
