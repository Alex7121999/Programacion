function generarLlista() {
    let a1 = []; // Array buit
    for (let i = 0; i < 40; i++) {
        a1[i] = Math.floor(Math.random() * 10); // nombre 0–9
    }
    return a1;
}

function mostrarLlista(a1) {
    let mostrallista = "Llista generada:\n" + a1.join(" ");
    alert(mostrallista);
}

function demanarNumero() {
    return parseInt(prompt("Quin número vols buscar? (0-9): "));
}

function buscarNumero(a1, n) {
    let comptador = 0;
    let resultat = "";

    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === n) {
            comptador++;
            resultat += "\nPosició " + i;
        }
    }

    alert("El número " + n + " apareix " + comptador + " vegades." + resultat);
}

// --- PROGRAMA PRINCIPAL ---

let a1 = generarLlista();
mostrarLlista(a1);
let n = demanarNumero();
buscarNumero(a1, n);
