"use strict";

const MIN = 'A',
    MAX = 'Z';
let frase;
let offset;

frase = prompt("Escriu una frase");
offset = parseInt(prompt("Quin desplaçament vols?"));

let xifrat = frase.trim().toUpperCase().split("");

// Encriptar
for (let i = 0; i < xifrat.length; i++) {
    // Només si és una lletra entre 'A' i 'Z'
    if (xifrat[i] >= MIN && xifrat[i] <= MAX) {
        let lletraXifrada = String.fromCharCode(xifrat[i].charCodeAt(0) + offset);
        // Si el resultat és més gran que 'Z' agafa una a partir de 'A'
        if (lletraXifrada > MAX) {
            lletraXifrada = String.fromCharCode(xifrat[i].charCodeAt(0) + offset - 26);
        }
        xifrat[i] = lletraXifrada;
    }
}

// Mostrar array encriptat lletra a lletra
let resultat = "Frase encriptada: ";
for (let i = 0; i < xifrat.length; i++) {
    resultat += xifrat[i];
}
alert(resultat);

// Mostrar array encriptat convertint l'array de caràcters a string
alert("Frase encriptada: " + xifrat.join(""));