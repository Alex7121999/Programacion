"use strict";

let listanumero = [];
generarNumsAleatoris(listanumero);
let numerosPares = buscar10PrimersNumsParells(listanumero);
mostrar10PrimersNumsParells(numerosPares);


function generarNumsAleatoris(numero) {
    for (let i = 0; i < 1000; i++) {
        numero.push(Math.floor(Math.random() * (10000 - 100 + 1) + 100));
    }
}

// Buscar els 10 primers números parells
function buscar10PrimersNumsParells(numero) {
    let numerosPares = []; // Array per guardar els parells trobats
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 === 0) {
            numerosPares.push(numero[i]);
        }
        if (numerosPares.length === 10) {
            break; // Sortir del bucle quan ja tenim 10 parells
        }
    }
    return numerosPares;
}

// Mostrar els 10 primers números parells per consola
function mostrar10PrimersNumsParells(numerosPares) {
    alert("Els 10 primers números parells són:");
    for (let i = 0; i < numerosPares.length; i++) {
        alert(numerosPares[i]);
    }
}
