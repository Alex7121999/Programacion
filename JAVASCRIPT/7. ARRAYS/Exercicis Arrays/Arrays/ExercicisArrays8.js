"use strict";

let a1 = [];

// Generar i mostrar 10 números aleatoris
for (let i = 0; i < 10; ++i) {
    a1[i] = Math.floor(Math.random() * 100);
    console.log(a1[i]);
}

// Sumar consecutius (primer+segon, segon+tercer...)
console.log("---- Suma consecutius ----");
for (let i = 1; i < a1.length; ++i) {
    console.log(a1[i - 1] + a1[i]);
}

// Sumar inversos (primer+últim, segon+penúltim...)
console.log("---- Suma inversos ----");
for (let i = 0; i < a1.length / 2; ++i) {
    console.log(a1[i] + a1[a1.length - i - 1]);
}