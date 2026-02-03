let lletres = [];
let N = 80;
let l = N - 1;
let c;

// Generar lletres aleatòries
function generarLletres() {
    for (let i = 0; i < N; ++i) {
        lletres[i] = Math.floor(Math.random() * (90 - 65 + 1) + 65); // ASCII A–Z
    }
}

// Mostrar en horitzontal
function mostrarLletres() {
    console.log("Lletres generades:");
    let cadena = "";
    for (let i = 0; i < N; ++i) {
        cadena += String.fromCharCode(lletres[i]) + " ";
    }
    console.log(cadena);
}

// Comptar cada lletra A–Z
function comptarLletres() {
    for (let i = 65; i <= 90; ++i) {
        let comptador = 0;

        for (let j = 0; j < N; ++j) {
            if (lletres[j] === i) ++comptador;
        }

        if (comptador > 0)
            console.log(String.fromCharCode(i) + " apareix " + comptador + " vegades");
        else
            console.log(String.fromCharCode(i) + " no apareix cap vegada");
    }
}

// --- EXECUCIÓ ---
generarLletres();
mostrarLletres();
comptarLletres();