const MIDA = 40;
let a1 = [];
let a2 = [];

function generarLlistes() {
    for (let i = 0; i < MIDA; ++i) {
        a1[i] = Math.floor(Math.random() * 10);
    }

    for (let i = 0; i < MIDA; ++i) {
        a2[i] = Math.floor(Math.random() * 10);
    }
}

function mostrarLlistes() {
    console.log("Llista A1:");
    let cadena1 = "";
    for (let i = 0; i < MIDA; ++i) {
        cadena1 += a1[i] + " ";
    }
    console.log(cadena1);

    console.log("Llista A2:");
    let cadena2 = "";
    for (let i = 0; i < MIDA; ++i) {
        cadena2 += a2[i] + " ";
    }
    console.log(cadena2);
}

function compararLlistes() {
    console.log("\nCoincidències:");
    for (let i = 0; i < MIDA; ++i) {
        if (a1[i] == a2[i]) {
            console.log("Posició " + i + "   Número " + a1[i]);
        }
    }
}

generarLlistes();
mostrarLlistes();
compararLlistes();