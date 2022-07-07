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

//////////////////////////////  Dropdown  ////////////////////////////////
const navBtn = document.querySelector(".nav__dropdown-btn"); ////Nav-search
const navDropdown = document.querySelectorAll(".nav__dropdown"); ////Nav-search

navBtn.addEventListener("click", () => {
  navDropdown.forEach((nav_el) => {
    nav_el.classList.toggle("nav__show");
  });
});

//////////////////////////////  Dropdown-2  ////////////////////////////////
const navBtn2 = document.querySelector(".nav__dropdown-btn-2"); ////Nav-search
const navDropdown2 = document.querySelectorAll(".nav__dropdown-2"); ////Nav-search

navBtn2.addEventListener("click", () => {
  navDropdown2.forEach((nav_el) => {
    nav_el.classList.toggle("nav__show");
  });
});

///////////////////////////////SLIDER ////////////////////////////////////////

const swiper = new Swiper(".mySwiper-hero", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-hero",
    prevEl: ".swiper-button-prev-hero",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1201: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
