const productos = [
  {
    nombre: "Base Hidratante",
    precio: 30000,
    imagen: "./images/base.jpg",
    descripcion: "Una base ligera para un acabado natural.",
    categoria: "Bases",
  },
  {
    nombre: "Base liquida",
    precio: 48000,
    imagen: "./images/base2.jpg",
    descripcion: "Una base ligera para un acabado luminoso.",
    categoria: "Bases",
  },
  {
    nombre: "Base natural",
    precio: 34000,
    imagen: "./images/base3.jpg",
    descripcion: "Cobertura ligera.",
    categoria: "Bases",
  },
  {
    nombre: "Base Hidratante",
    precio: 53000,
    imagen: "./images/base4.jpg",
    descripcion: "Una base ligera para un acabado natural.",
    categoria: "Bases",
  },
  {
    nombre: "Labial en barra",
    precio: 24000,
    imagen: "./images/labial.jpg",
    descripcion: "Color duradero.",
    categoria: "Labiales"
  },
  {
    nombre: "Labial",
    precio: 15000,
    imagen: "./images/labial2.jpg",
    descripcion: "Dale mas personalidad a tus labios.",
    categoria: "Labiales"
  },
  {
    nombre: "Labial mate",
    precio: 20000,
    imagen: "./images/labialmate.jpg",
    descripcion: "Formula suave con un acabado mate.",
    categoria: "Labiales"
  },
  {
    nombre: "Blush",
    precio: 25000,
    imagen: "./images/Rubor.jpg",
    descripcion: "Acabado natural.",
    categoria: "Rubores"
  },
  {
    nombre: "Rubor Bonita",
    precio: 22000,
    imagen: "./images/rubor1.jpg",
    descripcion: "Ponte mas bonita.",
    categoria: "Rubores"
  },
  {
    nombre: "Rubor liquido.",
    precio: 18000,
    imagen: "./images/rubor2.jpeg",
    descripcion: "Para un acabado mas luminoso.",
    categoria: "Rubores"
  },
  {
    nombre: "Rubor.",
    precio: 20000,
    imagen: "./images/rubor3.jpg",
    descripcion: "Efecto natural.",
    categoria: "Rubores"
  },
  {
    nombre: "Pestañina Escrespadora",
    precio: 42000,
    imagen: "./images/pestañina.jpg",
    descripcion: "Volumen con mas curva.",
    categoria: "Pestañinas"
  },
  {
    nombre: "Pestañas hermosas",
    precio: 38000,
    imagen: "./images/pestanina1.jpg",
    descripcion: "Volumen extremo sin grumos.",
    categoria: "Pestañinas"
  },
  {
    nombre: "Pestañina Maybelline",
    precio: 54000,
    imagen: "./images/pestañina2.jpg",
    descripcion: "Elevan la belleza natural de tus pestañas.",
    categoria: "Pestañinas"
  }
];


function generarCatalogo() {
  productos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");


    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio.toLocaleString()}</p>
      <button onclick="verDetalles('${producto.nombre}', '${producto.descripcion}', '${producto.precio.toLocaleString()}')">Ver Detalles</button>
    `;

    const contenedor = document.getElementById(`categoria-${producto.categoria}`);
    if (contenedor) {
      contenedor.appendChild(div);
    }
  });
}

function verDetalles(nombre, descripcion, precio) {
  alert(`Producto: ${nombre}\nDescripción: ${descripcion}\nPrecio: $${precio}`);
}

document.addEventListener("DOMContentLoaded", generarCatalogo)