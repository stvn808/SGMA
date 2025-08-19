function initSidebar() {
  console.log("✅ Sidebar cargado");
  
  const checkboxes = document.querySelectorAll(".sidebar input[type='checkbox']");
  
  if (checkboxes.length === 0) {
    console.error("No se encontraron checkboxes en el sidebar");
    return;
  }
  
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const label = document.querySelector(`label[for="${cb.id}"]`);
      const filterName = label ? label.textContent.trim() : "Filtro desconocido";
      
      if (cb.checked) {
        console.log(`✓ Filtro aplicado: ${filterName}`);
        applyFilter(cb.id, true);
      } else {
        console.log(`✗ Filtro removido: ${filterName}`);
        applyFilter(cb.id, false);
      }
      
      // Actualizar contador de filtros activos
      updateActiveFiltersCount();
    });
  });
}

// Función para aplicar filtros
function applyFilter(filterId, isActive) {
  // Aquí implementarías la lógica de filtrado real
  console.log(`Aplicando filtro ${filterId}: ${isActive ? 'activo' : 'inactivo'}`);
  
  // Ejemplo: filtrar productos visibles
  const products = document.querySelectorAll(".product");
  
  if (isActive) {
    // Lógica para mostrar/ocultar productos según el filtro
    // Esto dependería de cómo tengas estructurados tus datos de productos
  }
  
  // Actualizar vista de productos
  updateProductsDisplay();
}

// Función para contar filtros activos
function updateActiveFiltersCount() {
  const activeFilters = document.querySelectorAll(".sidebar input[type='checkbox']:checked");
  const count = activeFilters.length;
  
  console.log(`Filtros activos: ${count}`);
  
  // Podrías mostrar este contador en algún lugar de la UI
  // Por ejemplo, en el hero o en el sidebar
}

// Función para actualizar la visualización de productos
function updateProductsDisplay() {
  const products = document.querySelectorAll(".product");
  let visibleCount = 0;
  
  products.forEach(product => {
    // Aquí implementarías la lógica para determinar si el producto debe mostrarse
    // basado en los filtros activos
    if (!product.style.display || product.style.display !== 'none') {
      visibleCount++;
    }
  });
  
  console.log(`Productos visibles: ${visibleCount} de ${products.length}`);
}