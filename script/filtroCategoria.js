document.addEventListener('DOMContentLoaded', function() {
  //Obtener el parámetro 'categoria' de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoriaFiltro = urlParams.get('categoria');

  //Seleccionar todos los contenedores de productos que tienen data-categoria
  const tarjetas = document.querySelectorAll('[data-categoria]');

  // Si no hay tarjetas, salir
  if (!tarjetas.length) return;

  // Si no hay filtro, mostrar todas y actualizar contador
  if (!categoriaFiltro) {
    tarjetas.forEach(t => t.style.display = 'block');
    actualizarContador(tarjetas.length, '');
    return;
  }

  // Filtrar: mostrar solo las que coinciden con la categoría
  let encontrados = 0;
  tarjetas.forEach(t => {
    if (t.dataset.categoria === categoriaFiltro) {
      t.style.display = 'block';
      encontrados++;
    } else {
      t.style.display = 'none';
    }
  });

  // Mostrar mensaje si no hay productos en esa categoría
  const row = document.querySelector('.row.g-4');
  if (!row) return;
  let mensajeExistente = document.getElementById('sin-productos');
  if (encontrados === 0 && !mensajeExistente) {
    const aviso = document.createElement('div');
    aviso.id = 'sin-productos';
    aviso.className = 'col-12 text-center py-5';
    aviso.innerHTML = `
      <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
      <p class="text-muted">No hay productos en esta categoría.</p>
      <a href="catalogo.html" class="btn btn-primary">Ver todos los productos</a>
    `;
    row.appendChild(aviso);
  } else if (encontrados > 0 && mensajeExistente) {
    mensajeExistente.remove();
  }

  //Actualizar el contador de productos
  const nombreCategoria = categoriaFiltro ? categoriaFiltro.charAt(0).toUpperCase() + categoriaFiltro.slice(1) : '';
  actualizarContador(encontrados, nombreCategoria);
});

// Actualizar el badge del contador
function actualizarContador(cantidad, nombreCategoria) {
  const badge = document.querySelector('.badge.bg-primary.fs-6');
  if (!badge) return;
  if (nombreCategoria) {
    badge.textContent = `${cantidad} productos en ${nombreCategoria}`;
  } else {
    const total = document.querySelectorAll('[data-categoria]').length;
    badge.textContent = `${total} productos`;
  }
}