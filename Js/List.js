function toggleDropdown() {
  document.querySelector(".dropdown").classList.toggle("show");
}

function selectItem(item) {
  // Изменение текста кнопки на выбранный элемент
  document.querySelector(".dropbtn").innerText = item;
  document.getElementById("selected-item").innerText = "Вы выбрали: " + item;
  // Закрыть выпадающий список после выбора элемента
  document.querySelector(".dropdown").classList.remove("show");
}

// Закрыть список, если клик вне его области
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
    document.querySelector(".dropdown").classList.remove("show");
  }
};
