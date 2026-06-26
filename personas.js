const personas = [];

const formulario = document.getElementById("formularioPersonas");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEdad = document.getElementById("edad");
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");

const cuerpoTabla = document.getElementById("cuerpoTabla");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nuevaPersona = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    edad: inputEdad.value,
    altura: inputAltura.value,
    peso: inputPeso.value,
    imc: (inputPeso.value / (inputAltura.value / 100) ** 2).toFixed(2),
  };

  personas.push(nuevaPersona);

  mostrarPersona();

  formulario.reset();
});

function mostrarPersona() {
  cuerpoTabla.innerHTML = "";

  personas.forEach((persona, indice) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${persona.nombre}</td>
      <td>${persona.apellido}</td>
      <td>${persona.edad}</td>
      <td>${persona.altura}</td>
      <td>${persona.peso}</td>
      <td>${persona.imc}</td>
      <td>
        <button onclick="eliminarPersona(${indice})">
          Eliminar
        </button>
      </td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}

function eliminarPersona(indice) {
  personas.splice(indice, 1);

  mostrarPersona();
}
