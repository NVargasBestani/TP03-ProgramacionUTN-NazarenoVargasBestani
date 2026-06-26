const personas = [];

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
});

const nuevaPersona = {
  nombre: inputNombre.value,
  apellido: inputApellido.value,
  edad: inputEdad.value,
  altura: inputAltura.value,
  peso: inputPeso.value,
};

personas.push(nuevaPersona);

function mostrarPersona() {
  personas.forEach((persona) => {
    const bloque = document.createElement("div");
    bloque.className = "persona-bloque";

    bloque.innerHTML = `
        <div class="persona-nombre"> ${persona.nombre} </div>
        <div class="persona-apellido"> ${persona.apellido} </div>
        <div class="persona-edad"> ${persona.edad} </div>
        <div class="persona-altura"> ${persona.altura} </div>
        <div class="persona-peso"> ${persona.peso} </div>
        `;
    gridPersonas.appendChild(bloque);
  });
}
