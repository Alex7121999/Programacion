"use strict";

let lletres = [];
let codiA = 'A'.charCodeAt(0); // 65
let codiZ = 'Z'.charCodeAt(0); // 90

// Generar 10 lletres aleatòries entre 'A' i 'Z'
for (let i = 0; i < 10; ++i) {
  let codi = Math.floor(Math.random() * (codiZ - codiA + 1)) + codiA;
  lletres[i] = String.fromCharCode(codi);
}

// Mostrar totes les lletres generades
console.log("Lletres generades:");
console.log(lletres.join(' '));