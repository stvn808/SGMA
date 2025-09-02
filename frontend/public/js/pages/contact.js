document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  // Validación básica
  if (!name || !email || !subject || !message) {
    msg.textContent = "⚠️ Todos los campos son obligatorios.";
    msg.style.color = "red";
    return;
  }

  // Validar correo
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    msg.textContent = "⚠️ Ingresa un correo válido.";
    msg.style.color = "red";
    return;
  }

  // Si pasa las validaciones
  msg.textContent = "✅ Tu mensaje ha sido enviado con éxito.";
  msg.style.color = "green";

  // Limpiar campos después de 2 segundos
  setTimeout(() => {
    document.getElementById("contactForm").reset();
  }, 2000);
});
