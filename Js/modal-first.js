const BUTTON__CLOSE = document.querySelector(".call__close");
const BUTTON__OPEN = document.querySelector(".nav__btn");
const BLOK = document.querySelector(".call");
const BACKGROUND__MODAL__WINDOW = document.querySelector(
  ".background__modal-window"
);

function openWindow() {
  BLOK.style.visibility = "visible";
  BACKGROUND__MODAL__WINDOW.style.visibility = "visible";
  document.body.classList.add("modal-open");
}

function closeWindow() {
  BLOK.style.visibility = "hidden";
  BACKGROUND__MODAL__WINDOW.style.visibility = "hidden";
  document.body.classList.remove("modal-open");
}
BUTTON__OPEN.addEventListener("click", openWindow);
BUTTON__CLOSE.addEventListener("click", closeWindow);

