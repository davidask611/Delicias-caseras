// Array de productos
const productos = [
  { nombre: "Torta arco iris", precio: "$50.000", imagen: "Torta_arco_iris.jpg" },
  { nombre: "Brownie", precio: "$15000", imagen: "brownie.jpg" },
  { nombre: "Pepas", precio: "$1000", imagen: "Pepas.jpg" },
  { nombre: "Budin inglés", precio: "$5000", imagen: "Budin inglés.jpg" },
  { nombre: "Pastaflora", precio: "$9100", imagen: "Pasta_frola.jpg" },
  { nombre: "Budin de banana con nuez", precio: "$6500", imagen: "budin.jpg" },
  { nombre: "Cupcakes de zanahoria y naranja con nuez", precio: "$8500 La docena", imagen: "Cupcakes de zanahoria y naranja con nuez.jpg" },
  { nombre: "tarta de durazno", precio: "$17.000", imagen: "tarta de durazno.jpg" },
  { nombre: "tarta de ricota", precio: "$17.000", imagen: "tarta de ricota.jpg" },
  { nombre: "Tarta crocante de manzana", precio: "$6500", imagen: "Tarta crocante de manzana.jpg" },
  { nombre: "Budin de limón con glase", precio: "$6000", imagen: "Budin de limón con glase.jpg" },
  { nombre: "Pancitos saborizados", precio: "$6500", imagen: "Pancitos saborizados.jpg" },
  { nombre: "Pancitos chips", precio: "$6500", imagen: "Pancitos chips.jpg" },
  { nombre: "Scon de queso", precio: "$6500", imagen: "Scon de queso.jpg" },
  { nombre: "Cupcakes de zanahoria y naranja con nuez", precio: "$700", imagen: "Cupcakes de zanahoria y naranja con nuez.jpg" },
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
  { nombre: "Budin de banana con nuez con harina integral", precio: "$7500", imagen: "Budin de banana con nuez.jpg" },
  { nombre: "Galletas de avena con harina integral", precio: "$3000", imagen: "Galletas de avena y harina integral.jpg" },
  // Aquí puedes agregar más productos saludables si deseas
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