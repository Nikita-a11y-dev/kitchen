const popupLinks = document.querySelectorAll(".popup-links");
const body = document.body;
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close__popup");
if (popupLinks.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      // Проверяем, если клик был не внутри .popup__content
      if (!e.target.closest(".popup__content")) {
        popupClose(currentPopup);
      }
    });
  }
}

function bodyLock() {
  const LockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.computedStyleMap.paddingRight = LockPaddingValue;
  }
  body.style.paddingRight = LockPaddingValue;
  body.classList.add("lock");
  // unlock = false;
}

function popupClose(popupActive, doUnlock = true) {
  console.log(unlock);
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, 0);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, 1);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});
