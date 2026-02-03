"use script";

//EXEMPLE CLASSE PEP

let op = prompt("Introdueix una operació (+, -, *, /):").trim().toUpperCase();

while (op != "FI") {
  try {
    const a = parseInt(prompt("Introdueix el primer nombre"));
    const b = parseInt(prompt("Introdueix el segon numero"));

    if (isNaN(a) || isNaN(b)) {
      alert("Algun nombre és incorrecte");
    } else {
      const resultat = calcular(a, b, op);
      alert("El resultat és " + resultat)
    }
  } catch (error) {
    alert("Error: " + error.message)
  }
  op = prompt("Introdueix una operació (+, -, *, /):").trim().toUpperCase();
}

alert("El programa ha finalitzat")

function calcular(a, b, op) {
  switch (op) {
    case "+":
      return sumar(a, b);
    case "-":
      return restar(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
    default:
      throw new Error("Operació incorrecta")
  }
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No es pot dividir per zero")
  }
  return a / b;
}