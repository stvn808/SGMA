function initNavbar() {
  console.log("✅ Navbar cargado");
  
  // Crear botón hamburguesa para responsive
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav__links");
  
  if (!navbar || !navLinks) {
    console.error("Elementos del navbar no encontrados");
    return;
  }
  
  // Verificar si el botón ya existe para evitar duplicados
  if (!document.querySelector(".toggle-btn")) {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰";
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.setAttribute("aria-label", "Menú de navegación");
    
    navbar.appendChild(toggleBtn);
    
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      toggleBtn.setAttribute("aria-expanded", 
        navLinks.classList.contains("active") ? "true" : "false"
      );
    });
  }
  
  // Funcionalidad de búsqueda
  const searchInput = document.querySelector(".search__bar input");
  const searchBtn = document.querySelector(".search__bar button");
  
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const searchTerm = searchInput ? searchInput.value.trim() : '';
      if (searchTerm) {
        alert(`Buscando: ${searchTerm}`);
      } else {
        alert("Por favor, ingresa un término de búsqueda");
      }
    });
  }
  
  // Enter key para búsqueda
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
      }
    });
  }
}