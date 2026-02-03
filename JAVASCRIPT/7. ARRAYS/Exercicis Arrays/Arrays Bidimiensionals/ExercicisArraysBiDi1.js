"use strict";
let { files, columnes } = demanarDimensions();
let array = crearMatriu(files, columnes);
mostrarMatriu(array, files, columnes);
let sumaFiles = sumarFiles(array, files, columnes);
let sumaColumnes = sumarColumnes(array, files, columnes);
compararSumes(sumaFiles, sumaColumnes, files, columnes);

function demanarDimensions() {
    let resposta = prompt("Introdueix el nombre de files i columnes (ex: 3 4):");

    while (!resposta || resposta.trim().split(" ").length !== 2) {
        resposta = prompt("Format incorrecte. Escriu: files columnes (ex: 3 4)");
    }

    let dades = resposta.trim().split(/\s+/);
    let files = parseInt(dades[0]);
    let columnes = parseInt(dades[1]);

    if (isNaN(files) || isNaN(columnes) || files <= 0 || columnes <= 0) {
        alert("Has d'introduir dos números enters positius.");
        throw "Valors no vàlids";
    }

    return { files, columnes };
}

function crearMatriu(files, columnes) {
    let array = [];
    for (let i = 0; i < files; ++i) {
        array[i] = [];
        for (let j = 0; j < columnes; ++j) {
            array[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return array;
}

function mostrarMatriu(array, files, columnes) {
    let resultat = "";
    for (let i = 0; i < files; ++i) {
        resultat += array[i].join(" ") + "\n";
    }
    console.log("MATRIU GENERADA:");
    console.log(resultat);
}

function sumarFiles(array, files, columnes) {
    let sumaFiles = [];
    for (let i = 0; i < files; ++i) {
        let totalFila = 0;
        for (let j = 0; j < columnes; ++j) {
            totalFila += array[i][j];
        }
        sumaFiles[i] = totalFila;
    }
    console.log("Suma de cada fila:", sumaFiles.join(" "));
    return sumaFiles;
}

function sumarColumnes(array, files, columnes) {
    let sumaColumnes = [];
    for (let j = 0; j < columnes; ++j) {
        let totalColumna = 0;
        for (let i = 0; i < files; ++i) {
            totalColumna += array[i][j];
        }
        sumaColumnes[j] = totalColumna;
    }
    console.log("Suma de cada columna:", sumaColumnes.join(" "));
    return sumaColumnes;
}

function compararSumes(sumaFiles, sumaColumnes, files, columnes) {
    let totalFiles = 0;
    for (let i = 0; i < files; ++i) totalFiles += sumaFiles[i];

    let totalColumnes = 0;
    for (let i = 0; i < columnes; ++i) totalColumnes += sumaColumnes[i];

    if (totalFiles === totalColumnes)
        alert("La suma és igual: " + totalFiles);
    else
        alert("Suma diferent → Files: " + totalFiles + " | Columnes: " + totalColumnes);
}
