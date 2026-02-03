"use strict";

// --- Crear tablero 8x8 ---
let tablero = [];
for (let i = 0; i < 8; i++) {
    tablero[i] = [];
    for (let j = 0; j < 8; j++) {
        tablero[i][j] = 0;
    }
}

// --- Barcos ---
let barcos = [5, 4, 3, 3, 2, 2, 1];
let listaBarcos = [];

// Convertir letra → índice
function letraAIndice(letra) {
    return letra.toUpperCase().charCodeAt(0) - 65;
}

// --- Mostrar tablero ---
function mostrarTablero() {
    let texto = "  A B C D E F G H\n";
    for (let i = 0; i < 8; i++) {
        texto += i + " ";
        for (let j = 0; j < 8; j++) {
            if (tablero[i][j] === 2) texto += "O ";
            else if (tablero[i][j] === 3) texto += "X ";
            else texto += "~ ";
        }
        texto += "\n";
    }
    alert(texto);
}

// --- Comprobar si cabe ---
function sePuedeColocar(f, c, t, h) {
    if (h && c + t > 8) return false;
    if (!h && f + t > 8) return false;

    for (let k = 0; k < t; k++) {
        let nf = f + (h ? 0 : k);
        let nc = c + (h ? k : 0);
        if (tablero[nf][nc] !== 0) return false;
    }
    return true;
}

// --- Colocar barco ---
function colocarBarco(tam) {
    let colocado = false;

    while (!colocado) {
        let f = Math.floor(Math.random() * 8);
        let c = Math.floor(Math.random() * 8);
        let h = Math.random() < 0.5;

        if (!sePuedeColocar(f, c, tam, h)) continue;

        let partes = [];

        for (let k = 0; k < tam; k++) {
            let nf = f + (h ? 0 : k);
            let nc = c + (h ? k : 0);
            tablero[nf][nc] = 1;
            partes.push([nf, nc]);
        }

        listaBarcos.push({
            tamaño: tam,
            posiciones: partes,
            hundido: false
        });

        colocado = true;
    }
}

// --- Colocar barcos ---
for (let i = 0; i < barcos.length; i++) {
    colocarBarco(barcos[i]);
}

// --- Quedan barcos vivos ---
function quedanBarcos() {
    for (let i = 0; i < listaBarcos.length; i++) {
        if (!listaBarcos[i].hundido) return true;
    }
    return false;
}

// --- Comprobar hundido ---
function comprobarBarcoHundido() {
    for (let i = 0; i < listaBarcos.length; i++) {
        let b = listaBarcos[i];
        if (b.hundido) continue;

        let todasTocadas = true;

        for (let j = 0; j < b.posiciones.length; j++) {
            let f = b.posiciones[j][0];
            let c = b.posiciones[j][1];

            if (tablero[f][c] !== 3) {
                todasTocadas = false;
                break;
            }
        }

        if (todasTocadas) {
            b.hundido = true;
            alert("¡Has esfonsat un vaixell de tamany " + b.tamaño + "!");
        }
    }
}

// --- Juego ---
let disparos = 0;
alert("¡Comença el joc de Batalla Naval!");

while (quedanBarcos()) {

    mostrarTablero();
    alert("Dispars realitzats: " + disparos);

    let entrada = prompt("Introdueix coordenades (ex: 3C)");
    if (!entrada || entrada.length < 2) continue;

    let fila = parseInt(entrada[0], 10);
    let col = letraAIndice(entrada[1]);

    if (isNaN(fila) || fila < 0 || fila > 7 || col < 0 || col > 7) {
        alert("Coordenadas no vàlides.");
        continue;
    }

    disparos++;

    if (tablero[fila][col] === 1) {
        alert("¡TOCAT!");
        tablero[fila][col] = 3;
        comprobarBarcoHundido();

    } else if (tablero[fila][col] === 0) {
        alert("Aigua.");
        tablero[fila][col] = 2;

    } else {
        alert("Ja has disparat aquí.");
    }
}

mostrarTablero();
alert("¡Has esfonsat TOTS els vaixells! Dispars totals: " + disparos);
