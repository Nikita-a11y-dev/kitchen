document.querySelectorAll(".accordion__header").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList[1] == "active") {
      document
        .querySelectorAll(".accordion__header")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".accordion__content")
        .forEach((content) => (content.style.display = "none"));
    } else {
      // Закрываем все активные секции
      document
        .querySelectorAll(".accordion__header")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".accordion__content")
        .forEach((content) => (content.style.display = "none"));

      // Открываем текущую секцию
      button.classList.add("active");
      button.nextElementSibling.style.display = "block";
    }
  });
});
