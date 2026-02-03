"use strict";

let paraula;
let paraules = [];
const MIDA = paraules.length;

// Ordenar
for (let i = 0; i < MIDA - 1; i++) {
    for (let j = i + 1; j < MIDA; j++) {
        if (paraules[i].toUpperCase() > paraules[j].toUpperCase()) {
            paraula = paraules[i];
            paraules[i] = paraules[j];
            paraules[j] = paraula;
        }
    }
}
// Mostrar paraules ordenades
alert("Paraules ordenades:\n" + paraules.join("\n"));

// Buscar paraules fins que la parauls sigui FI
do {
    // Demanar paraula
    paraula = prompt("Paraula");
    // Buscar paraula
    let min = 0;             // Primera posició de la llista
    let max = MIDA - 1;      // Última posició de la llista
    let mid = 0;             // Posició central (inicialitzar per evitar error)
    let comparacions = 0;

    while (min <= max) {
        // Calcular la posició central del tram entre min i max
        mid = Math.floor((min + max) / 2);
        ++comparacions;
        if (paraules[mid].toUpperCase() < paraula.toUpperCase()) {
            min = mid + 1; // Agafar la meitat superior
        } else if (paraules[mid].toUpperCase() > paraula.toUpperCase()) {
            max = mid - 1; // Agafar la meitat inferior
        } else {
            break; // Valor trobat
        }
    }
    // Indicar posició i quantes comparacions ha hagut de fer
    if (MIDA > 0 && paraules[mid].toUpperCase() === paraula.toUpperCase()) {
        alert("S'ha trobat la paraula en la posició " + mid +
            " fent " + comparacions + " comparacions");
    } else {
        alert("NO s'ha trobat la paraula en la llista" +
            " fent " + comparacions + " comparacions");
    }
} while (!paraula.toUpperCase() === "FI");