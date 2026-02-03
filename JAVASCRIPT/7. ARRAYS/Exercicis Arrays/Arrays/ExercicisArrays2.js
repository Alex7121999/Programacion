"use strict"

const NUM_NOTES = 10;
let notes = [];
let aprovats = 0;
let suspesos = 0;
let sumaAprovats = 0;

iniciar();

//Demanar notes
function demanarNotes() {
    for (let i = 0; i < NUM_NOTES; i++) {
        let nota = parseFloat(prompt("Introdueix una nota entre 1 i 10"));
        while (isNaN(nota) || nota < 1 || nota > 10) {
            nota = parseFloat(prompt("Nota no vàlida. Introdueix una nota entre 1 i 10"));
        }
        notes[i] = nota;
    }
}

//Comprovar aprovats i suspesos
function comprovarNotes() {
    for (let i = 0; i < NUM_NOTES; i++) {
        if (notes[i] < 5) ++suspesos;
        else {
            ++aprovats;
        }
    }
    alert("Aprovats: " + aprovats + " Suspesos: " + suspesos);
}

//Mostrar mitjana dels aprovats
function mitjanaAprovats() {
    alert("Notes dels aprovats")
    for (let i = 0; i < NUM_NOTES; i++) {
        if (notes[i] >= 5) {
            alert(notes[i] + " ");
            sumaAprovats += notes[i];
        }
    }
    alert("Mitjana d'aprovats " + sumaAprovats / aprovats);
}

function iniciar() {
    demanarNotes();
    comprovarNotes();
    mitjanaAprovats();
}