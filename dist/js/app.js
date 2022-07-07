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

const links = document.querySelectorAll(".navbar-link .btn-dropdown");
const dropdown = document.querySelectorAll(".navbar-link ul");

dropdown.forEach((element) => {
  const height = element.offsetHeight;
  element.style.marginTop = `${-height}px`;
});

//////////////////////////////Dropdown TEST ////////////////////////////////
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = e.currentTarget;
    const ele = target.nextElementSibling;

    dropdown.forEach((element) => {
      if (element !== ele) {
        element.previousElementSibling.classList.remove("active");
        element.classList.remove("dropdown");
      }
    });
    target.classList.toggle("active");
    ele.classList.toggle("dropdown");
  });
});
