"use strict";

let i, j, t, fc, suma;
let filesIguals, columnesIguals, diagonalsIguals, numerosTots;

// Exemple:
fc = 4;
let array = [
    [3, 14, 14, 5],
    [8, 7, 6, 7],
    [8, 10, 9, 7],
    [2, 11, 8, 8]
];

// Comprovar files
suma = -1;
filesIguals = true;
for (i = 0; i < fc; ++i) {
    t = 0;
    for (j = 0; j < fc; ++j) {
        t += array[i][j];
    }
    if (suma == -1) suma = t;
    if (suma != t) {
        filesIguals = false;
        break;
    }
}

// Comprovar columnes
suma = -1;
columnesIguals = true;
for (i = 0; i < fc; ++i) {
    t = 0;
    for (j = 0; j < fc; ++j) {
        t += array[j][i];
    }
    if (suma == -1) suma = t;
    if (suma != t) {
        columnesIguals = false;
        break;
    }
}

// Comprovar diagonals
diagonalsIguals = true;
t = 0;
for (i = 0; i < fc; ++i) {
    t += array[i][i];
}
suma = t;
t = 0;
for (i = 0; i < fc; ++i) {
    t += array[i][fc - i - 1];
}
if (suma != t) {
    diagonalsIguals = false;
}

// Comprovar si hi son tots els  números
numerosTots = true;
let numeros = [];
for (i = 0; i < fc; ++i) {
    for (j = 0; j < fc; ++j) {
        t = array[i][j];
        if (t >= 1 && t <= fc * fc) {
            if (numeros[t]) {
                numerosTots = false;
                break;
            } else {
                numeros[t] = true;
            }
        } else {
            numerosTots = false;
            break;
        }
    }
    if (!numerosTots) break;
}

// Mostrar resultat
if (filesIguals && columnesIguals && diagonalsIguals && numerosTots) {
    alert("És un quadrat màgic");
} else {
    let m = "No és un quadrat màgic:";
    if (!filesIguals) m += "\n   -No totes les files sumen el mateix";
    if (!columnesIguals) m += "\n   -No totes les columnes sumen el mateix";
    if (!diagonalsIguals) m += "\n   -Les dues diagonals no sumen el mateix";
    if (!numerosTots) m += "\n   -No conté tots els números";
    alert(m);
}