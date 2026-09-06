
let adminSesionActiva = false;  // controla si el admin está logueado

// Array global
function listarProductos() { return productos; }
function obtenerProducto(id) { return productos.find(p => p.id === id) || null; }

function agregarProducto(nombre, precio, stock, imagen, descripcion, categoria) {
  if (!nombre || !precio || !stock) return { ok: false, msg: 'Faltan datos.' };
  const nuevo = {
    id: Date.now(),
    nombre: nombre.trim(),
    precio: parseFloat(precio),
    stock: parseInt(stock),
    imagen: imagen || 'https://via.placeholder.com/300',
    descripcion: descripcion || '',
    categoria: categoria || 'general'
  };
  productos.push(nuevo);
  return { ok: true, msg: 'Producto agregado.', producto: nuevo };
}

function modificarProducto(id, datos) {
  const p = obtenerProducto(id);
  if (!p) return { ok: false, msg: 'No existe.' };
  if (datos.nombre !== undefined) p.nombre = datos.nombre.trim();
  if (datos.precio !== undefined) p.precio = parseFloat(datos.precio);
  if (datos.stock !== undefined) p.stock = parseInt(datos.stock);
  if (datos.imagen !== undefined) p.imagen = datos.imagen;
  if (datos.descripcion !== undefined) p.descripcion = datos.descripcion;
  if (datos.categoria !== undefined) p.categoria = datos.categoria;
  return { ok: true, msg: 'Actualizado.', producto: p };
}

function eliminarProducto(id) {
  const idx = productos.findIndex(p => p.id === id);
  if (idx === -1) return { ok: false, msg: 'No existe.' };
  const nombre = productos[idx].nombre;
  productos.splice(idx, 1);
  return { ok: true, msg: `"${nombre}" eliminado.` };
}

function adminLogeado() {
  return adminSesionActiva === true;
}

function adminLogin() {
  adminSesionActiva = true;
}

function adminLogout() {
  adminSesionActiva = false;
  window.location.href = 'log.html';
}