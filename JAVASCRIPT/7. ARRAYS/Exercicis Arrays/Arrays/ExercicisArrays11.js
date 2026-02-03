const N = 20;
let numeros = [];
let comptador = [];
let c;

function omplirArray() {
    for (let i = 0; i < N; ++i) {
        numeros[i] = Math.floor(Math.random() * 10);
    }
}

function mostrarArray() {
    console.log("Llista generada:");
    console.log(numeros.join(" "));
}

function solucio1() {
    console.log("\n--- SOLUCIÓ 1 (array auxiliar) ---");

    for (let i = 0; i <= 9; ++i) comptador[i] = 0;

    for (let i = 0; i < N; ++i) {
        ++comptador[numeros[i]];
    }

    for (let i = 0; i < comptador.length; ++i) {
        console.log(i + " --> " + comptador[i] + " vegades");
    }
}

function solucio2() {
    console.log("\n--- SOLUCIÓ 2 (bucle niuat) ---");

    for (let i = 0; i <= 9; ++i) {
        c = 0;
        for (let j = 0; j < N; ++j) {
            if (numeros[j] == i) ++c;
        }
        console.log(i + " --> " + c + " vegades");
    }
}

// --- PROGRAMA PRINCIPAL ---
omplirArray();
mostrarArray();
solucio1();
solucio2();

