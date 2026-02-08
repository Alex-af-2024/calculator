let numA; //parseInt(prompt("Primer número: "));
let numB; // parseInt(prompt("Segundo número: "));
let operate;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    console.log("No se puede dividir entre cero");
  } else {
    return a / b;
  }
}

let result;

switch (operate) {
  case "1":
    result = add(numA, numB);
    break;
  case "2":
    result = subtract(numA, numB);
    break;
  case "3":
    result = multiply(numA, numB);
    break;
  case "4":
    result = divide(numA, numB);
    break;
  default:
    console.log("Ingrese un número del 1 al 4");
}

if (result !== undefined) {
  console.log("Resultado: " + result);
}

//5- Update number of variables
function clearEntry() {}

// Clear all
// Esta función limpia todo el estado de la calculadora
function clearAll() {
  numA = null;
  numB = null;
  currentOperation = null;
  console.log("Calculadora reiniciada");
}
