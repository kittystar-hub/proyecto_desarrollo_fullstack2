let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarrito();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    eliminarDelCarrito(id);
  } else {
    actualizarCarrito();
  }
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenedorProductos = document.getElementById('productosContainer');
  const listaCarrito = document.getElementById('listaCarrito');
  const totalSpan = document.getElementById('totalCarrito');
  const carritoVacio = document.getElementById('carritoVacio');
  const carritoItems = document.getElementById('carritoItems');

  // Renderizar productos disponibles
  let htmlProductos = '';
  productos.forEach(p => {
    const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    htmlProductos += `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="product-card-mini">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
          <div class="product-name">${p.nombre}</div>
          <div class="product-price">${formatter.format(p.precio)}</div>
          <button class="btn btn-primary btn-sm btn-add" onclick="agregarAlCarrito(${p.id})">
            <i class="fas fa-cart-plus me-1"></i>Agregar
          </button>
        </div>
      </div>
    `;
  });
  contenedorProductos.innerHTML = htmlProductos;

  // Renderizar carrito
  if (carrito.length === 0) {
    carritoVacio.style.display = 'block';
    carritoItems.style.display = 'none';
    return;
  }
  carritoVacio.style.display = 'none';
  carritoItems.style.display = 'block';

  const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
  let total = 0;
  let htmlItems = '';
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    htmlItems += `
      <li class="list-group-item cart-item">
        <div class="item-info">
          <div class="item-name">${item.nombre}</div>
          <div class="item-price">${formatter.format(item.precio)} c/u</div>
        </div>
        <div class="item-actions">
          <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${item.id}, -1)">-</button>
          <span class="cantidad">${item.cantidad}</span>
          <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${item.id}, 1)">+</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${item.id})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    `;
  });
  listaCarrito.innerHTML = htmlItems;
  totalSpan.textContent = formatter.format(total);
}

// Eventos
document.addEventListener('DOMContentLoaded', function() {
  actualizarCarrito();

  document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
  document.getElementById('finalizarCompra').addEventListener('click', function() {
    if (carrito.length === 0) return;
    alert('✅ ¡Compra finalizada! Gracias por tu pedido.');
    vaciarCarrito();
  });
});