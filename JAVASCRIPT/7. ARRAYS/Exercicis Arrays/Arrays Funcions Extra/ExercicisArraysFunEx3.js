"use strict";

// Paraules possibles
let paraules = ["javascript", "programa", "taula", "groc", "monitor", "teclat", "ratoli", "hardware", "array"];
let paraula = paraules[Math.floor(Math.random() * paraules.length)];

// Substitució del .fill("_") per un bucle
let secreta = [];
for (let i = 0; i < paraula.length; i++) {
    secreta[i] = "_";
}

// Dibuix del penjat
let penjat = [
    `
    
    
    
    =========
    `,
    `
      |
      |
      |
      |
      |
    =========
    `,
    `
      +---+
      |
      |
      |
      |
      |
    =========
    `,
    `
      +---+
      |   O
      |
      |
      |
      |
    =========
    `,
    `
      +---+
      |   O
      |   |
      |   |
      |
      |
    =========
    `,
    `
      +---+
      |   O
      |  /|\\
      |   |
      |
      |
    =========
    `,
    `
      +---+
      |   O
      |  /|\\
      |   |
      |  / \\
      |
    =========
    `
];

let intentsMax = penjat.length - 1;
let intents = 0;
let lletresUsades = [];

console.log("Benvingut al joc del Penjat!\n");

// Bucle principal
while (intents < intentsMax && secreta.includes("_")) {

    console.log(penjat[intents]);
    console.log("Paraula: " + secreta.join(" "));
    console.log("Lletres usades: " + lletresUsades.join(", "));
    console.log("Intents fallats: " + intents + "/" + intentsMax);

    let lletra = "";

    try {
        lletra = prompt("Introdueix una lletra:");

        if (!lletra || lletra.length !== 1 || !isNaN(lletra)) {
            throw new Error("Has d'introduir UNA lletra vàlida.");
        }

        lletra = lletra.toLowerCase();

        if (lletresUsades.includes(lletra)) {
            throw new Error("Ja has provat aquesta lletra!");
        }

        lletresUsades.push(lletra);

    } catch (e) {
        console.log("ERROR: " + e.message + "\n");
        continue;
    }

    // Comprovar si existeix
    let encert = false;

    for (let i = 0; i < paraula.length; i++) {
        if (paraula[i] === lletra) {
            secreta[i] = lletra;
            encert = true;
        }
    }

    if (!encert) {
        intents++;
        console.log("Lletra incorrecta!\n");
    } else {
        console.log("Bona! La lletra hi és!\n");
    }
}

// Final del joc
console.log(penjat[intents]);

if (!secreta.includes("_")) {
    console.log("✔ Felicitats! Has endevinat la paraula!");
    console.log("Paraula: " + paraula);
} else {
    console.log("✖ Has perdut!");
    console.log("La paraula era: " + paraula);
}