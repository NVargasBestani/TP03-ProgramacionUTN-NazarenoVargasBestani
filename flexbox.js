const elementos = [
  {
    nombre: "Guiso de lentejas light.",
    descripcion: "Nada de agregar panceta y cosas caloricas",
  },
  { nombre: "Ensalada de frutas.", descripcion: "Ideal para tardes calurosas" },
  {
    nombre: "Milanesas al horno con ensalada.",
    descripcion: "Buena idea para un almuerzo liviano",
  },
  { nombre: "Carne con verduras al horno.", descripcion: "Rapido y practico" },
  { nombre: "Ceviche.", descripcion: "Plato exotico pero no menos delicioso" },
  { nombre: "Yogurt con granola.", descripcion: "Ideal de preentreno" },
];

function generarBloques() {
  const contenedor = document.getElementById("bloques-container");
  elementos.forEach((elemento) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque";
    bloque.innerHTML = `
        <div class = "bloque-numero">${elemento.nombre}</div>
        <div class = "bloque-descripcion">${elemento.descripcion}</div>
        `;
    contenedor.appendChild(bloque);
  });
}

generarBloques();
