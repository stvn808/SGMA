// Seleccionar todas las categorías
const categories = document.querySelectorAll(".category");

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    const categoryName = cat.dataset.category;
    alert(`Has seleccionado la categoría: ${categoryName.toUpperCase()}`);
    // 👇 Aquí podrías redirigir a products.html con la categoría seleccionada
    // window.location.href = `products.html?category=${categoryName}`;
  });
});
