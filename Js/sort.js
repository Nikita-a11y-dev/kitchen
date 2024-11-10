function sortProducts(attribute, order) {
  const productList = document.getElementById("product-list");
  const products = Array.from(
    productList.getElementsByClassName("popular-modal__item")
  );

  products.sort((a, b) => {
    const aValue = parseFloat(a.getAttribute(`data-${attribute}`));
    const bValue = parseFloat(b.getAttribute(`data-${attribute}`));

    if (order === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  // Обновляем порядок отображения на странице
  products.forEach((product) => productList.appendChild(product));
}
