function autenticacion(type) {
  const password = document.getElementById("passwordInput").value;
  fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, type })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success && type === 'main') {
      document.getElementById("auth").style.display = "none";
      document.getElementById("content").style.display = "block";
    } else if (!data.success) {
      alert("Contraseña incorrecta");
    }
  })
  .catch(() => alert("Error en servidor"));
}

function verContrasena(btn) {
  const pass = prompt("Ingrese la contraseña global para ver datos:");
  fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: pass, type: 'view' })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      const cred = btn.parentElement.querySelector(".credentials");
      cred.classList.remove("hidden");
      btn.remove();
    } else {
      alert("Contraseña incorrecta");
    }
  })
  .catch(() => alert("Error de validación"));
}
