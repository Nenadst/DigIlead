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

////////////////////////////////Remove HOVER on mobile/////////////////////////////////////////////

function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  // remove all the :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

function disableHover() {
  document.body.classList.remove("hasHover");
}
