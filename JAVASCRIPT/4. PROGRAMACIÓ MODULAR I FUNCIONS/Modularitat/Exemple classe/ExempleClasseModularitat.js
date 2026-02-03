"use script";

let edat
let MAJOR = 18;

introduirDades();
let edat2 = processarDades(edat);
mostrarResultats();

function introduirDades() {
    // Codi per demanar les dades
    edat = prompt("Escriu la teva edat")
}

function processarDades(e) {
    // Codi per processar les dades
    if (e >= MAJOR) e /= 2;
    else e += 5;
    return e * 2;
}

function mostrarResultats() {
    // Codi per mostrar el resultat
    if(edat >= MAJOR) alert("Ets major d'edat")
    alert("Tens " + edat + " anys")
    alert("El doble de la teva edat es " + edat2 + " anys")
}