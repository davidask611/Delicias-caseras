// Array de productos
const productos = [
  // { nombre: "Torta arco iris", precio: "$50.000", imagen: "Torta_arco_iris.jpg" },
  { nombre: "Brownie", precio: "$15000", imagen: "brownie.jpg" },
  { nombre: "Pepas", precio: "$1000", imagen: "Pepas.jpg" },
  { nombre: "Budin inglés", precio: "$5000", imagen: "Budin inglés.jpg" },
  { nombre: "Pastaflora", precio: "$9100", imagen: "Pasta_frola.jpg" },
  { nombre: "Budin de banana con nuez", precio: "$6500", imagen: "budin.jpg" },
  { nombre: "Cupcakes de zanahoria y naranja con nuez", precio: "$8500 La docena", imagen: "Cupcakes de zanahoria y naranja con nuez.jpg" },
  { nombre: "tarta de durazno", precio: "$17.000", imagen: "tarta de durazno.jpg" },
  { nombre: "tarta de ricota", precio: "$17.000", imagen: "tarta de ricota.jpg" },
  { nombre: "Budin de limón con glase", precio: "$6000", imagen: "Budin de limón con glase.jpg" },
  { nombre: "Pancitos chips", precio: "$6500", imagen: "Pancitos chips.jpg" },
  { nombre: "Pan arabe", precio: "$1000 6 unidades", imagen: "Pan arabe.jpg" },
];

// Array de productos saludables
const saludables = [
  { nombre: "Budin de banana con nuez con harina integral", precio: "$7500", imagen: "Budin de banana con nuez.jpg" },
  { nombre: "Galletas de avena con harina integral", precio: "$3000", imagen: "Galletas de avena y harina integral.jpg" },
  { nombre: "Cupcakes de zanahoria y naranja con nuez con harina integral", precio: "$700", imagen: "Cupcakes de zanahoria y naranja con nuez.jpg" },
];

// Variables del carrito
let carrito = [];
const whatsappNumber = '5491124059835';
const whatsappSaludable = '5491124059835';

// Función para extraer el valor numérico del precio
function extraerValor(precioStr) {
  const numeroStr = precioStr.replace(/[^0-9]/g, '');
  return parseInt(numeroStr, 10) || 0;
}

// Función para actualizar el carrito en la UI
function actualizarCarrito() {
  const contador = document.getElementById('contador-carrito');
  const itemsContainer = document.getElementById('items-carrito');
  const totalElement = document.getElementById('total-carrito');
  
  contador.textContent = carrito.length;
  
  itemsContainer.innerHTML = '';
  
  let total = 0;
  
  carrito.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item-carrito';
    itemElement.innerHTML = `
      <span>${item.nombre} - ${item.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">×</button>
    `;
    itemsContainer.appendChild(itemElement);
    
    total += extraerValor(item.precio);
  });
  
  totalElement.textContent = `$${total.toLocaleString()}`;
}

// Función para eliminar un item del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  
  // Mostrar notificación
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion-agregado';
  notificacion.textContent = 'Producto eliminado del carrito';
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.classList.add('mostrar');
  }, 10);
  
  setTimeout(() => {
    notificacion.classList.remove('mostrar');
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 2000);
}

// Función para enviar el pedido por WhatsApp
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  
  let mensaje = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
  
  carrito.forEach(item => {
    mensaje += `- ${item.nombre}: ${item.precio}\n`;
  });
  
  // Calcular total (por si hubo cambios)
  let total = 0;
  carrito.forEach(item => {
    total += extraerValor(item.precio);
  });
  
  mensaje += '\nTotal: $' + total.toLocaleString();
  mensaje += '\n\n¿Cómo podemos proceder con el pedido?';
  
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  
  // Opcional: vaciar el carrito después de enviar
  // carrito = [];
  // actualizarCarrito();
}

// Función para agregar al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
  
  // Mostrar notificación
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion-agregado';
  notificacion.textContent = `${producto.nombre} agregado al carrito`;
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.classList.add('mostrar');
  }, 10);
  
  setTimeout(() => {
    notificacion.classList.remove('mostrar');
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 2000);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar/ocultar modal del carrito
  const btnCarrito = document.getElementById('btn-carrito');
  const modalCarrito = document.getElementById('modal-carrito');
  const btnCerrar = document.getElementById('btn-cerrar-carrito');
  const btnEnviar = document.getElementById('btn-enviar-whatsapp');
  
  btnCarrito.addEventListener('click', () => {
    modalCarrito.style.display = 'flex';
  });
  
  btnCerrar.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
  });
  
  btnEnviar.addEventListener('click', enviarPedidoWhatsApp);
  
  // Cerrar modal al hacer clic fuera
  modalCarrito.addEventListener('click', (e) => {
    if (e.target === modalCarrito) {
      modalCarrito.style.display = 'none';
    }
  });

  // Crear productos normales
  const grid = document.getElementById('productos-grid');
  productos.forEach(prod => {
    const section = document.createElement('section');
    section.className = 'producto';
    section.innerHTML = `
      <img src="img/${prod.imagen}" alt="Foto de ${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}</p>
      <button class="btn-agregar-carrito" onclick="agregarAlCarrito(${JSON.stringify(prod).replace(/"/g, '&quot;')})">
        Agregar al carrito
      </button>
      <a class="btn-whatsapp"
         href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
           `Buenas, deseo comprar ${prod.nombre}. ¿Cómo hacemos?`
         )}"
         target="_blank" rel="noopener noreferrer">
        Solicitar por WhatsApp
      </a>
    `;
    grid.appendChild(section);
  });

  // Crear productos saludables
  const saludableGrid = document.getElementById('saludable-grid');
  saludables.forEach(prod => {
    const section = document.createElement('section');
    section.className = 'saludable-producto';
    section.innerHTML = `
      <img src="img/${prod.imagen}" alt="Foto de ${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}</p>
      <button class="btn-agregar-carrito" onclick="agregarAlCarrito(${JSON.stringify(prod).replace(/"/g, '&quot;')})">
        Agregar al carrito
      </button>
      <a class="btn-whatsapp"
         href="https://wa.me/${whatsappSaludable}?text=${encodeURIComponent(
           `Hola, me interesa el producto saludable: ${prod.nombre}. ¿Cómo hago para comprarlo?`
         )}"
         target="_blank" rel="noopener noreferrer">
        Solicitar por WhatsApp
      </a>
    `;
    saludableGrid.appendChild(section);
  });

  // Estilo para la notificación
  const estiloNotificacion = document.createElement('style');
  estiloNotificacion.textContent = `
    .notificacion-agregado {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #4CAF50;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1000;
    }
    .notificacion-agregado.mostrar {
      opacity: 1;
    }
  `;
  document.head.appendChild(estiloNotificacion);
});