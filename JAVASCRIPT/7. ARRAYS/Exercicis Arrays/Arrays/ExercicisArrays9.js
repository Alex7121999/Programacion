function generarArray() {
    let lletres = new Array(10);
    for (let i = 0; i < lletres.length; i++) {
        lletres[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return lletres;
}

function rotarArray(lletres) {
    let l = lletres.length - 1;
    let c = lletres[l];
    // Desplaçar començant pel final
    for (let i = l; i > 0; i--) {
        lletres[i] = lletres[i - 1];
    }
    // Posar al principi la que estava al final
    lletres[0] = c;
    return lletres;
}

function mostrarArray(titol, array) {
    console.log(titol + ": " + array.join(" "));
}

// --- PROGRAMA PRINCIPAL ---
let lletres = generarArray();
mostrarArray("Original", lletres);

lletres = rotarArray(lletres);
mostrarArray("Rotat", lletres);