function initFooter() {
  console.log("✅ Footer cargado");
  
  const footer = document.querySelector(".footer");
  
  if (!footer) {
    console.error("Footer no encontrado");
    return;
  }
  
  // Evento click en el footer
  footer.addEventListener("click", () => {
    showCompanyInfo();
  });
  
  // Agregar información adicional al footer dinámicamente
  addFooterContent();
  
  // Agregar año actual automáticamente
  updateCopyright();
}

// Función para mostrar información de la empresa
function showCompanyInfo() {
  const info = `
    🏢 Tienda Agropecuaria AgroMarket
    📅 Fundada en 2020
    📍 Medellín, Colombia
    📞 Contacto: (4) 123-4567
    📧 info@agromarket.com
    
    ✅ Entregas el mismo día
    ✅ Productos de calidad
    ✅ Más de 1000 productos disponibles
  `;
  
  alert(info);
}

// Función para agregar contenido adicional al footer
function addFooterContent() {
  const footer = document.querySelector(".footer");
  
  // Crear contenedor para enlaces adicionales
  const footerLinks = document.createElement("div");
  footerLinks.className = "footer-links";
  footerLinks.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
    flex-wrap: wrap;
  `;
  
  // Enlaces del footer
  const links = [
    { text: "Términos y Condiciones", url: "#terms" },
    { text: "Política de Privacidad", url: "#privacy" },
    { text: "Contáctanos", url: "#contact" },
    { text: "Ayuda", url: "#help" }
  ];
  
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;
    a.style.cssText = `
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 3px;
      transition: background-color 0.3s, color 0.3s;
    `;
    
    // Efectos hover
    a.addEventListener("mouseenter", () => {
      a.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      a.style.color = "white";
    });
    
    a.addEventListener("mouseleave", () => {
      a.style.backgroundColor = "transparent";
      a.style.color = "rgba(255, 255, 255, 0.8)";
    });
    
    // Evento click
    a.addEventListener("click", (e) => {
      e.preventDefault();
      handleFooterLinkClick(link.text, link.url);
    });
    
    footerLinks.appendChild(a);
  });
  
  // Insertar los enlaces antes del copyright
  const copyright = footer.querySelector("p");
  footer.insertBefore(footerLinks, copyright);
  
  // Agregar información de contacto
  addContactInfo(footer);
}

// Función para manejar clicks en enlaces del footer
function handleFooterLinkClick(linkText, url) {
  console.log(`Click en: ${linkText} (${url})`);
  
  switch(url) {
    case "#terms":
      alert("Términos y Condiciones\n\n• Entregas en Medellín el mismo día\n• Productos con garantía\n• Cambios y devoluciones dentro de 15 días");
      break;
    case "#privacy":
      alert("Política de Privacidad\n\n• Protegemos tus datos personales\n• No compartimos información con terceros\n• Cookies solo para mejorar la experiencia");
      break;
    case "#contact":
      alert("Contáctanos\n\n📞 Teléfono: (4) 123-4567\n📧 Email: info@agromarket.com\n📍 Dirección: Medellín, Colombia\n🕐 Horario: Lunes a Viernes 8:00 - 18:00");
      break;
    case "#help":
      alert("Centro de Ayuda\n\n❓ Preguntas frecuentes\n📦 Seguimiento de pedidos\n💳 Métodos de pago\n🚚 Información de envíos");
      break;
  }
}

// Función para actualizar el copyright con el año actual
function updateCopyright() {
  const copyright = document.querySelector(".footer p");
  if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.innerHTML = `&copy; ${currentYear} Tienda Agropecuaria - Todos los derechos reservados`;
  }
}

// Función para agregar información de contacto
function addContactInfo(footer) {
  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";
  contactInfo.style.cssText = `
    margin-top: 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
  `;
  
  contactInfo.innerHTML = `
    📞 (4) 123-4567 | 📧 info@agromarket.com | 📍 Medellín, Colombia
  `;
  
  const copyright = footer.querySelector("p");
  footer.insertBefore(contactInfo, copyright);
}