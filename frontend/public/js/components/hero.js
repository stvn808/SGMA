function initHero() {
  console.log("✅ Hero cargado");
  
  const select = document.querySelector(".hero select");
  
  if (!select) {
    console.error("Select del hero no encontrado");
    return;
  }
  
  select.addEventListener("change", () => {
    const selectedValue = select.value;
    console.log(`Orden seleccionado: ${selectedValue}`);
    
    // Aquí podrías implementar la lógica de ordenamiento
    switch(selectedValue) {
      case "Más vendidos":
        sortProducts("popularity");
        break;
      case "Menor precio":
        sortProducts("price-asc");
        break;
      case "Mayor precio":
        sortProducts("price-desc");
        break;
      default:
        console.log("Ordenamiento por defecto");
    }
  });
}

// Función auxiliar para ordenar productos (ejemplo)
function sortProducts(criteria) {
  console.log(`Aplicando ordenamiento: ${criteria}`);
  
  // Aquí implementarías la lógica real de ordenamiento
  // Por ejemplo, reordenar los elementos del DOM o hacer una nueva consulta
  
  const products = document.querySelectorAll(".product");
  if (products.length > 0) {
    console.log(`Reordenando ${products.length} productos por ${criteria}`);
    // Implementar lógica de ordenamiento aquí
  }
}