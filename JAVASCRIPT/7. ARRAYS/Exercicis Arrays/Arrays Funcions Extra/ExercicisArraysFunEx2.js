"use strict";

const iMida = document.getElementById("mida");
const bInicialitzar = document.getElementById("inicialitzar");
const bSeguent = document.getElementById("seguent");
const terminal = document.getElementById("terminal");

bInicialitzar.addEventListener("click", init);
bSeguent.addEventListener("click", seguentGeneracio);

let generacio;
let actual;
let seguent;
let mida;

function init() {
    mida = parseInt(iMida.value);
    generacio = 0;
    actual = [];
    seguent = [];

    // Inicialitzar a 0
    for (let i = 0; i < mida; ++i) {
        actual[i] = [];
        seguent[i] = [];
        for (let j = 0; j < mida; ++j) {
            actual[i][j] = 0;
            seguent[i][j] = 0;
        }
    }

    // Posar 1 aleatòriament
    for (let i = 1; i < mida - 1; ++i) {
        for (let j = 1; j < mida - 1; ++j) {
            if (Math.random() < .5) actual[i][j] = 1;
        }
    }

    dibuixar(actual);
}

function seguentGeneracio() {
    for (let f = 1; f < mida - 1; f++) {
        for (let c = 1; c < mida - 1; c++) {
            // Comptar quants veïns
            let veins = actual[f - 1][c - 1] + actual[f - 1][c] + actual[f - 1][c + 1];
            veins += actual[f][c - 1] + actual[f][c + 1];
            veins += actual[f + 1][c - 1] + actual[f + 1][c] + actual[f + 1][c + 1];

            // Implementar regles
            if ((actual[f][c] == 1) && (veins < 2 || veins > 3))
                seguent[f][c] = 0; // Hi ha pocs veïns o massa: desapareix
            else if ((actual[f][c] == 0) && (veins == 3))
                seguent[f][c] = 1; // Nou bacteri
            else
                seguent[f][c] = actual[f][c]; // No canvia
        }
    }

    ++generacio;

    copiar(actual, seguent);

    dibuixar(actual);
}

function dibuixar(actual) {
    let resultat = "Generació " + generacio + "<br><br>";
    for (let f = 0; f < mida; f++) {
        for (let c = 0; c < mida; c++) {
            resultat += actual[f][c] == 0 ? "·  " : "B  ";
        }
        resultat += "<br>";
    }
    terminal.innerHTML = resultat;
}

function copiar(actual, seguent) {
    for (let f = 1; f < mida - 1; f++)
        for (let c = 1; c < mida - 1; c++)
            actual[f][c] = seguent[f][c];
}