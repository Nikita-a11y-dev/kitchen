const tabsTitle = document.querySelectorAll(".tab__title");
const tabsContent = document.querySelectorAll(".tab__content");

tabsTitle.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const tabsTitleTarget = event.currentTarget.getAttribute("data-tab");

    // Убираем активный класс со всех табов
    tabsTitle.forEach((element) => element.classList.remove("active-tab"));

    // Скрываем весь контент
    tabsContent.forEach((element) =>
      element.classList.add("hidden-tab-content")
    );

    // Добавляем активный класс к нажатому табу
    event.currentTarget.classList.add("active-tab");

    // Показываем только соответствующий контент
    const activeContent = document.getElementById(tabsTitleTarget);
    if (activeContent) {
      activeContent.classList.remove("hidden-tab-content");
    }
  })
);

document.querySelector('[data-tab="tab-1"]').classList.add("active-tab");
document.querySelector("#tab-1").classList.remove("hidden-tab-content");
document.querySelector('[data-tab="tab-modal-1"]').classList.add("active-tab");
document.querySelector("#tab-modal-1").classList.remove("hidden-tab-content");
