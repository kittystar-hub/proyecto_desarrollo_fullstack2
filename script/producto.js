document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const contenedor = document.getElementById('productDetail');

  if (!productId || isNaN(productId)) {
    contenedor.innerHTML = `
      <div class="alert alert-danger text-center py-5">
        <i class="fas fa-exclamation-circle fa-3x mb-3"></i>
        <h4>ID de producto no válido</h4>
        <p>No se ha especificado un producto válido.</p>
        <a href="catalogo.html" class="btn btn-primary mt-3"><i class="fas fa-arrow-left"></i> Volver al catálogo</a>
      </div>
    `;
    return;
  }

  const producto = productos.find(p => p.id === productId);

  if (!producto) {
    contenedor.innerHTML = `
      <div class="alert alert-danger text-center py-5">
        <i class="fas fa-exclamation-circle fa-3x mb-3"></i>
        <h4>Producto no encontrado</h4>
        <p>El producto que buscas no existe o ha sido removido.</p>
        <a href="catalogo.html" class="btn btn-primary mt-3"><i class="fas fa-arrow-left"></i> Volver al catálogo</a>
      </div>
    `;
    return;
  }

  const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
  const precioFormateado = formatter.format(producto.precio);
  const precioOriginalFormateado = producto.precioOriginal ? formatter.format(producto.precioOriginal) : null;

  let especHtml = '';
  for (const [clave, valor] of Object.entries(producto.especificaciones)) {
    especHtml += `
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <span class="fw-bold">${clave}</span>
        <span class="text-muted text-end">${valor}</span>
      </li>
    `;
  }

  contenedor.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <div class="product-image-container">
          <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}" loading="lazy">
          ${producto.oferta ? `<span class="badge-oferta-detalle">-${Math.round((1 - producto.precio / producto.precioOriginal) * 100)}%</span>` : ''}
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold">${producto.nombre}</h1>
        <div class="product-prices-detalle mt-2">
          ${precioOriginalFormateado ? `<span class="old-price-detalle">${precioOriginalFormateado}</span>` : ''}
          <span class="price-detalle">${precioFormateado}</span>
        </div>
        <div class="mt-4">
          <h5><i class="fas fa-align-left text-primary"></i> Descripción</h5>
          <p class="text-muted">${producto.descripcion}</p>
        </div>
        <div class="mt-4">
          <h5><i class="fas fa-microchip text-primary"></i> Especificaciones</h5>
          <ul class="list-group list-group-flush">
            ${especHtml}
          </ul>
        </div>
        <div class="mt-4 d-flex flex-wrap gap-2">
          <button class="btn btn-primary btn-lg" onclick="agregarAlCarrito(${producto.id})">
            <i class="fas fa-shopping-cart"></i> Agregar al carrito
          </button>
          <a href="catalogo.html" class="btn btn-outline-secondary btn-lg">
            <i class="fas fa-arrow-left"></i> Volver
          </a>
        </div>
      </div>
    </div>
  `;
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  alert(`"${producto.nombre}" agregado al carrito (Precio: ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(producto.precio)})`);
}