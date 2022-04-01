function saludar() {
  // La variable nombre es una variable local creada por iniciar.
  let nombre = "¡Hola!";
  // La función mostrarNombre es una función interna, una clausura.
  function mostrarSaludo() {
    // Usa una variable declarada en la función externa.
    console.log(nombre);
  }
  mostrarSaludo();
}

saludar();

function saludar() {
  const saludo = "Hola";
  console.log(saludo);
}

saludar(); // Hola
console.log(saludo); // saludo is not defined

const saludar = "hola";

function saludo() {
  console.log("Función interna");
  console.log(saludar);
}
saludo();

console.log(saludar);
