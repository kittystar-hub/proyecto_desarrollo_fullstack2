document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que se recargue la página

        // SIMULACIÓN: cualquier credencial es válida
        // Guardar sesión directamente
        localStorage.setItem('userLogged', 'true');
        // Redirigir a la página principal
        window.location.href = 'index.html';
    });
}
});