document.getElementById('loginAdminForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const usuario = document.getElementById('nombreAdmin').value.trim();
            const contrasenia = document.getElementById('keys').value.trim();
            if (usuario === 'admin' && contrasenia === 'admin123') {
                localStorage.setItem('adminLogged', 'true');
                window.location.href = 'menuAdmin.html';
            } else {
                alert('Credenciales incorrectas. Inténtalo de nuevo.');
                document.getElementById('keys').value = '';
            }
        });