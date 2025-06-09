// Array de productos
const productos = [
  { nombre: "Torta arco iris", precio: "$50.000", imagen: "Torta_arco_iris.jpg" },
  { nombre: "Alfajor", precio: "$140", imagen: "alfajor.jpg" },
  { nombre: "Brownie", precio: "$1500", imagen: "brownie.jpg" },
  { nombre: "Pepas", precio: "$1000", imagen: "Pepas.jpg" },
  { nombre: "Pastaflora", precio: "$9000", imagen: "Pasta_frola.jpg" },
  { nombre: "Budin de banana con nuez", precio: "$6500", imagen: "budin.jpg" },
  { nombre: "Cupcakes de zanahoria y naranja con nuez", precio: "$8500 La docena", imagen: "Cupcakes de zanahoria y naranja con nuez.jpg" },
  // Puedes agregar más productos aquí
];

const grid = document.getElementById('productos-grid');
const whatsappNumber = '5491124059835';

productos.forEach(prod => {
  const section = document.createElement('section');
  section.className = 'producto';
  section.innerHTML = `
    <img src="img/${prod.imagen}" alt="Foto de ${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p>
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

// Nuevo array de productos saludables
const saludables = [
  { nombre: "Barritas de avena y miel", precio: "$1200", imagen: "barrita_de_miel_limon.jpg" },
  { nombre: "Budín integral de zanahoria", precio: "$2500", imagen: "budin_integral_zanahoria.jpg" },
  { nombre: "Cookies de avena y banana", precio: "$800", imagen: "cookies_avena_banana.jpg" },
  // Agrega más productos saludables aquí si deseas
];

const saludableGrid = document.getElementById('saludable-grid');
const whatsappSaludable = '5491124059835';

saludables.forEach(prod => {
  const section = document.createElement('section');
  section.className = 'saludable-producto';
  section.innerHTML = `
    <img src="img/${prod.imagen}" alt="Foto de ${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p>
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