"use strict";

let i, j, t, fc;

// Introduir mida
fc = parseInt(prompt("Introdueix la mida de la matriu"));

// Crear i inicialitzar array
let array = [];
t = 0;
for (i = 0; i < fc; ++i) {
    array[i] = [];
    for (j = 0; j < fc; ++j) {
        array[i][j] = ++t;
    }
}

// Mostrar array
let resultat = "";
for (i = 0; i < fc; ++i) {
    for (j = 0; j < fc; ++j) {
        resultat += ("" + array[i][j]).padStart(4);
    }
    resultat += "\n";
}
resultat += "\n";

// Omplir diagonals
for (i = 0; i < fc; ++i) {
    t = 0;
    for (j = i; j < fc; ++j) {
        array[i][j] = ++t;
        array[j][i] = t;
    }
}

// Mostrar array
for (i = 0; i < fc; ++i) {
    for (j = 0; j < fc; ++j) {
        resultat += array[i][j] + " ";
    }
    resultat += "\n";
}
resultat += "\n";

// Sumar diagonal major
let sumaDM = 0;
for (i = 0; i < fc; ++i) {
    sumaDM += array[i][i];
}
resultat += "Suma DM: " + sumaDM + "\n";

// Sumar diagonal major inversa
let sumaDMI = 0;
for (i = 0; i < fc; ++i) {
    sumaDMI += array[i][fc - i - 1];
}
resultat += "Suma DMI: " + sumaDMI + "\n\n";

// Sumar triangle inferior i superior
let sumaTS = 0;
let sumaTI = 0;
for (i = 0; i < fc; ++i) {
    for (j = i + 1; j < fc; ++j) {
        sumaTS += array[i][j];
        sumaTI += array[j][i];
    }
}
resultat += "Suma triangle superior: " + sumaTS + "\nSuma triangle inferior: " + sumaTI + "\n\n";

// Omplir triangle inferior i superior amb 0
for (i = 0; i < fc; ++i) {
    for (j = i + 1; j < fc; ++j) {
        array[i][j] = 0;
        array[j][i] = 0;
    }
}

// Mostrar array
for (i = 0; i < fc; ++i) {
    for (j = 0; j < fc; ++j) {
        resultat += array[i][j] + " ";
    }
    resultat += "\n";
}

console.log(resultat);


// EL MATEIX EXERCICI PERÒ AMB FUNCIONS

/*"use strict";

let i, j, t, fc;
let array = [];
let resultat = "";

// ------------------------- FUNCIONS ----------------------------

// Demanar mida
function introduirMida() {
    fc = parseInt(prompt("Introdueix la mida de la matriu"));
}

// Crear i inicialitzar array
function crearArray() {
    array = [];
    t = 0;
    for (i = 0; i < fc; ++i) {
        array[i] = [];
        for (j = 0; j < fc; ++j) {
            array[i][j] = ++t;
        }
    }
}

// Mostrar array amb format
function mostrarArrayFormat() {
    for (i = 0; i < fc; ++i) {
        for (j = 0; j < fc; ++j) {
            resultat += ("" + array[i][j]).padStart(4);
        }
        resultat += "\n";
    }
    resultat += "\n";
}

// Omplir diagonals
function omplirDiagonals() {
    for (i = 0; i < fc; ++i) {
        t = 0;
        for (j = i; j < fc; ++j) {
            array[i][j] = ++t;
            array[j][i] = t;
        }
    }
}

// Mostrar array simple
function mostrarArraySimple() {
    for (i = 0; i < fc; ++i) {
        for (j = 0; j < fc; ++j) {
            resultat += array[i][j] + " ";
        }
        resultat += "\n";
    }
    resultat += "\n";
}

// Sumar diagonal major
function sumaDiagonalMajor() {
    let sumaDM = 0;
    for (i = 0; i < fc; ++i) {
        sumaDM += array[i][i];
    }
    resultat += "Suma DM: " + sumaDM + "\n";
}

// Sumar diagonal major inversa
function sumaDiagonalInversa() {
    let sumaDMI = 0;
    for (i = 0; i < fc; ++i) {
        sumaDMI += array[i][fc - i - 1];
    }
    resultat += "Suma DMI: " + sumaDMI + "\n\n";
}

// Sumar triangle superior i inferior
function sumarTriangles() {
    let sumaTS = 0;
    let sumaTI = 0;
    for (i = 0; i < fc; ++i) {
        for (j = i + 1; j < fc; ++j) {
            sumaTS += array[i][j];
            sumaTI += array[j][i];
        }
    }
    resultat += "Suma triangle superior: " + sumaTS + "\n";
    resultat += "Suma triangle inferior: " + sumaTI + "\n\n";
}

// Omplir triangle superior i inferior amb 0
function omplirTriangles0() {
    for (i = 0; i < fc; ++i) {
        for (j = i + 1; j < fc; ++j) {
            array[i][j] = 0;
            array[j][i] = 0;
        }
    }
}

// --------------------------- MAIN ------------------------------

function main() {
    introduirMida();
    crearArray();
    mostrarArrayFormat();

    omplirDiagonals();
    mostrarArraySimple();

    sumaDiagonalMajor();
    sumaDiagonalInversa();

    sumarTriangles();

    omplirTriangles0();
    mostrarArraySimple();

    console.log(resultat);
}

main();
*/ 