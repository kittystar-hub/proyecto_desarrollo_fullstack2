
// FUNCIONES DE SESIÓN

// Verifica si el usuario está logueado
function estaLogueado() {
  return localStorage.getItem('userLogged') === 'true';
}

// Cambiar la interfaz según el estado
function updateUserMenu() {
  const guestMenu = document.getElementById('userMenuGuest');
  const loggedMenu = document.getElementById('userMenuLogged');

  if (!guestMenu || !loggedMenu) {
    console.warn('No se encontraron los menús de usuario');
    return;
  }

  if (estaLogueado()) {
    guestMenu.style.display = 'none';
    loggedMenu.style.display = 'block';
  } else {
    guestMenu.style.display = 'block';
    loggedMenu.style.display = 'none';
  }
}

// Cerrar sesión
function logout() {
  localStorage.removeItem('userLogged');
  updateUserMenu();
  // Opcional: recargar para resetear otros estados
  window.location.reload();
}


// EJECUTAR AL CARGAR LA PÁGINA

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  updateUserMenu();

  // Asignar evento al botón de cerrar sesión si existe
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      logout();
    });
  }
});