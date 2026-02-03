"use strict";

window.onload = function () {
    const terminal = document.getElementById("terminal");
    if (!terminal) {
        alert("ERROR: No existeix cap element amb id='terminal'");
        return;
    }

    let a1 = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    let a2 = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    // Netejar terminal
    terminal.innerHTML = "";

    // Mostrar matrius
    mostrarArrayBi(a1, terminal);
    terminal.innerHTML += "X<br>";
    mostrarArrayBi(a2, terminal);
    terminal.innerHTML += "=<br>";

    // Multiplicar
    let a3 = multiplicarArraysBi(a1, a2);

    if (a3 === null) {
        terminal.innerHTML += "No es poden multiplicar";
    } else {
        mostrarArrayBi(a3, terminal);
    }
};

// Funció per mostrar una matriu
function mostrarArrayBi(array, terminal) {
    let resultat = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            resultat += ("" + array[i][j]).padStart(4, " ");
        }
        resultat += "<br>";
    }
    terminal.innerHTML += resultat;
}

// Funció per multiplicar matrius
function multiplicarArraysBi(a1, a2) {
    let f1 = a1.length;
    let c1 = a1[0].length;
    let f2 = a2.length;
    let c2 = a2[0].length;

    if (c1 !== f2) return null;

    let a3 = [];

    for (let i = 0; i < f1; i++) {
        a3[i] = [];
        for (let j = 0; j < c2; j++) {
            let suma = 0;
            for (let k = 0; k < c1; k++) {
                suma += a1[i][k] * a2[k][j];
            }
            a3[i][j] = suma;
        }
    }
    return a3;
}
