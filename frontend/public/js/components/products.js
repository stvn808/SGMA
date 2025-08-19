function initProducts() {
  console.log("✅ Productos cargados");

  const products = document.querySelectorAll(".product");
  products.forEach(p => {
    p.addEventListener("click", () => {
      alert("Has seleccionado: " + p.querySelector("p").textContent);
    });
  });
}
function initProducts() {
  console.log("✅ Productos cargados");
  
  const products = document.querySelectorAll(".product");
  
  if (products.length === 0) {
    console.error("No se encontraron productos");
    return;
  }
  
  console.log(`Inicializando ${products.length} productos`);
  
  products.forEach((product, index) => {
    // Agregar evento de click
    product.addEventListener("click", () => {
      const productName = product.querySelector("p");
      if (productName) {
        showProductDetail(productName.textContent, product);
      }
    });
    
    // Agregar efectos hover mejorados
    product.addEventListener("mouseenter", () => {
      product.style.transform = "translateY(-5px)";
      product.style.boxShadow = "0 8px 25px rgba(46, 125, 50, 0.15)";
    });
    
    product.addEventListener("mouseleave", () => {
      product.style.transform = "translateY(0)";
      product.style.boxShadow = "none";
    });
    
    // Agregar atributos de accesibilidad
    product.setAttribute("tabindex", "0");
    product.setAttribute("role", "button");
    product.setAttribute("aria-label", `Ver detalles del producto: ${product.querySelector("p")?.textContent || 'Producto'}`);
    
    // Soporte para navegación por teclado
    product.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        product.click();
      }
    });
  });
}

// Función para mostrar detalles del producto
function showProductDetail(productName, productElement) {
  console.log(`Producto seleccionado: ${productName}`);
  
  // Crear modal o mostrar información detallada
  const modal = createProductModal(productName, productElement);
  document.body.appendChild(modal);
  
  // Animar la aparición del modal
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

// Función para crear modal de producto
function createProductModal(productName, productElement) {
  const modal = document.createElement("div");
  modal.className = "product-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${productName}</h2>
        <button class="close-btn" aria-label="Cerrar">&times;</button>
      </div>
      <div class="modal-body">
        <img src="${productElement.querySelector("img")?.src || ''}" alt="${productName}">
        <div class="product-info">
          <p><strong>Producto:</strong> ${productName}</p>
          <p><strong>Categoría:</strong> Herramientas Agropecuarias</p>
          <p><strong>Disponibilidad:</strong> En stock</p>
          <div class="product-actions">
            <button class="btn-primary">Agregar al carrito</button>
            <button class="btn-secondary">Ver más detalles</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Agregar estilos al modal
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  const modalContent = modal.querySelector(".modal-content");
  modalContent.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  `;
  
  // Evento para cerrar modal
  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => closeModal(modal));
  
  // Cerrar al hacer click fuera del modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
  
  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(modal);
    }
  });
  
  return modal;
}

// Función para cerrar modal
function closeModal(modal) {
  modal.style.opacity = "0";
  modal.querySelector(".modal-content").style.transform = "scale(0.8)";
  
  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  }, 300);
}