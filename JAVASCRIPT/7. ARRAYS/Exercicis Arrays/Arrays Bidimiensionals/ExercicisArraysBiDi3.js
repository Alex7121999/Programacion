"use strict";

const HOBBIES = 4;
const MENJARS = 6;
const DIES = 5;
const APATS = 3;
const DIES_SETMANA = [
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres"
];

let i, j;
let menjar;
let hobby;
let hobbies = [];
let menjars = [];
let planing = [];

function introduirDades(array, quantitat, missatge) {
    for (i = 0; i < quantitat; ++i) {
        array[i] = prompt(missatge);
    }
}

function generarPlanificacio() {
    for (i = 0; i < DIES; ++i) {
        planing[i] = [];
        for (j = 0; j < APATS; ++j) {
            menjar = menjars[Math.floor(Math.random() * MENJARS)];
            hobby = hobbies[Math.floor(Math.random() * HOBBIES)];
            planing[i][j] = menjar + " | " + hobby;
        }
    }
}

function crearResultat() {
    let resultat = "               Esmorzar                 Dinar                   Sopar\n";

    for (i = 0; i < DIES; ++i) {
        resultat += DIES_SETMANA[i].padEnd(12);

        for (j = 0; j < APATS; ++j) {
            resultat += planing[i][j].padEnd(25);
        }

        resultat += "\n";
    }

    return resultat;
}
//Executar

// Introduir hobbies
introduirDades(hobbies, HOBBIES, "Introdueix un dels teus hobbies");
// Introduir menjars
introduirDades(menjars, MENJARS, "Introdueix un dels teus menjars preferits");
// Generar planificació
generarPlanificacio();
// Mostrar planificació
console.log(crearResultat());