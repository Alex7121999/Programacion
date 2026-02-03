"use strict";

const F = 6;
const C = 4;

let notes = [
    [8, 6, 4, 9],
    [6, 4, 7, 8],
    [8, 7, 3, 5],
    [7, 2, 4, 6],
    [4, 9, 5, 6],
    [7, 4, 8, 9]
];

let mitjanaAlumnes = [];
let mitjanaUFs = [];

/* -----------------------------------------
   Funció per mostrar totes les notes
----------------------------------------- */
function mostrarNotes(notes) {
    let resultat = "            UF1  UF2  UF3  UF4\n";

    for (let i = 0; i < F; i++) {
        resultat += "Alumne " + (i + 1) + "     ";
        for (let j = 0; j < C; j++) {
            resultat += notes[i][j] + "    ";
        }
        resultat += "\n";
    }
    return resultat;
}

// Funció per calcular la mitjana d'un alumne
function mitjanaFila(fila) {
    let total = 0;
    for (let j = 0; j < C; j++) {
        total += fila[j];
    }
    return total / C;
}


// Calcular totes les mitjanes d'alumnes
function calcularMitjanesAlumnes() {
    let mitjanes = [];
    for (let i = 0; i < F; i++) {
        mitjanes[i] = mitjanaFila(notes[i]);
    }
    return mitjanes;
}

// Funció per calcular la mitjana d'una UF
function mitjanaColumna(col) {
    let total = 0;
    for (let i = 0; i < F; i++) {
        total += notes[i][col];
    }
    return total / F;
}

// Calcular totes les mitjanes de UFs

function calcularMitjanesUFs() {
    let mitjanes = [];
    for (let j = 0; j < C; j++) {
        mitjanes[j] = mitjanaColumna(j);
    }
    return mitjanes;
}


// Funció per mostrar les mitjanes dels alumnes
function mostrarMitjanesAlumnes(mitjanes) {
    let resultat = "\nMitjanes alumnes\n";
    for (let i = 0; i < F; i++) {
        resultat += "Alumne " + (i + 1) + "   " + mitjanes[i].toFixed(1) + "\n"; //El .toFixed arrodoneix el valor amb el nombre de decimals desitjat i el converteix a text.
    }
    return resultat;
}


//Funció per mostrar les mitjanes de les UFs
function mostrarMitjanesUFs(mitjanes) {
    let resultat = "\nMitjanes UFs\n";
    for (let i = 0; i < C; i++) {
        resultat += "UF " + (i + 1) + "   " + mitjanes[i].toFixed(1) + "\n"; //El .toFixed arrodoneix el valor amb el nombre de decimals desitjat i el converteix a text.
    }
    return resultat;
}


// Programa principal
let resultat = "";
resultat += mostrarNotes(notes);

mitjanaAlumnes = calcularMitjanesAlumnes();
resultat += mostrarMitjanesAlumnes(mitjanaAlumnes);

mitjanaUFs = calcularMitjanesUFs();
resultat += mostrarMitjanesUFs(mitjanaUFs);

console.log(resultat);