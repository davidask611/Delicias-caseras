// Array de productos
const productos = [
  { nombre: "Tarta de manzana", precio: "$120", imagen: "manzana.jpg" },
  { nombre: "Cheesecake", precio: "$140", imagen: "cheesecake.jpg" },
  { nombre: "Brownie", precio: "$110", imagen: "brownie.jpg" },
  { nombre: "Lemon Pie", precio: "$130", imagen: "lemonpie.jpg" },
  { nombre: "Alfajores", precio: "$90", imagen: "alfajor.jpg" },
  { nombre: "Budín", precio: "$100", imagen: "budin.jpg" },
  // Puedes agregar más productos aquí
];

const grid = document.getElementById('productos-grid');
const whatsappNumber = '5491124059835';

productos.forEach(prod => {
  const section = document.createElement('section');
  section.className = 'producto';
  section.innerHTML = `
    <img src="img/${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p>
    <a class="btn-whatsapp"
       href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
         `Buenas deseo comprar ${prod.nombre} como hacemos`
       )}"
       target="_blank" rel="noopener noreferrer">
      Solicitar por WhatsApp
    </a>
  `;
  grid.appendChild(section);
});