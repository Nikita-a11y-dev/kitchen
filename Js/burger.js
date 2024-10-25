const ICON_MENU = document.querySelector(".nav__btn-mobil");
const ICON_BODY = document.querySelector(".menu__body");

ICON_MENU.addEventListener("click", function (e) {
  ICON_MENU.classList.toggle("active");
  ICON_BODY.classList.toggle("active");
  body.classList.toggle("lock-b");
});
