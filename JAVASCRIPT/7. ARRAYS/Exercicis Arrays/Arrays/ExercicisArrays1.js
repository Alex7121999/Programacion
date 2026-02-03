"use strict"
const NUM_NOTES = 6;
let notes = [];
let min;
let max;

demanarNotes();
comprovarNotes();
calcularMitjana();

//Demanem les notess
function demanarNotes() {
    for (let i = 0; i < NUM_NOTES; i++) {
        let nota;
        do {
            nota = parseFloat(prompt("Introdueix la nota de la UF " + (i + 1) + " entre 1 i 10."));
        } while (isNaN(nota) || nota < 1 || nota > 10);
        notes[i] = nota;
    }
}

function comprovarNotes() {
    min = notes[0];
    max = notes[0];
    for (let i = 0; i < NUM_NOTES; i++) {
        if (notes[i] < min) min = notes[i];
        if (notes[i] > max) max = notes[i];
    }
    if (min < 5) {
        alert("El modul esta suspes")
    } else {
        alert("Nota mínima: " + min + "\nNota màxima: " + max);
    }
}

//Calcular mitja 
function calcularMitjana() {
    let total = 0;
    for (let i = 0; i < NUM_NOTES; i++) {
        total += notes[i];
    }
    alert("Mitjana: " + total / notes.length);
}

