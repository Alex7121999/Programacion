"use strict";

const paraula = demanarParaula();
let pOculta = inicialitzarOculta(paraula);
let lletresUtilitzades = "";
let vides = 5;
jugar();
mostrarResultatFinal();

function demanarParaula() {
    const entrada = prompt("Escriu la paraula a endevinar");
    return entrada.toLowerCase();
}

function inicialitzarOculta(paraula) {
    let oculta = "";
    for (let i = 0; i < paraula.length; i++) {
        oculta += "_";
    }
    return oculta;
}

function mostrarEstat() {
    let estat = "\nParaula: ";
    for (let i = 0; i < pOculta.length; i++) {
        estat += pOculta.charAt(i) + " ";
    }
    estat += "| Vides: " + vides + " | Utilitzades: ";
    for (let i = 0; i < lletresUtilitzades.length; i++) {
        estat += lletresUtilitzades.charAt(i) + " ";
    }
    console.log(estat);
}

function demanarLletra() {
    const entrada = prompt("Introdueix una lletra");
    return entrada.toLowerCase();
}

function esLletraValida(lletra) {
    return lletra && lletra.length === 1 && lletra >= "a" && lletra <= "z";
}

function lletraJaUtilitzada(lletra, utilitzades) {
    for (let i = 0; i < utilitzades.length; i++) {
        if (utilitzades.charAt(i) === lletra) return true;
    }
    return false;
}

function actualitzarOculta(lletra, paraula, pOculta) {
    let novaOculta = "";
    let encert = false;

    for (let i = 0; i < paraula.length; i++) {
        if (paraula.charAt(i) === lletra) {
            novaOculta += lletra;
            encert = true;
        } else {
            novaOculta += pOculta.charAt(i);
        }
    }

    return {
        nOculta: novaOculta,
        encert: encert
    };
}

function jugar() {
    while (vides > 0 && pOculta !== paraula) {
        try {
            const lletra = demanarLletra();

            if (!esLletraValida(lletra)) {
                throw "Introdueix només una lletra minúscula";
            }

            if (lletraJaUtilitzada(lletra, lletresUtilitzades)) {
                throw "Ja has fet servir aquesta lletra";
            }

            lletresUtilitzades += lletra;

            const resultat = actualitzarOculta(lletra, paraula, pOculta);
            pOculta = resultat.nOculta;

            if (resultat.encert) {
                console.log("Has encertat! La lletra " + lletra + " hi és.");
            } else {
                vides--;
                console.log("Has fallat! La lletra " + lletra + " no hi és.");
            }

            mostrarEstat();

        } catch (error) {
            console.log("Error: " + error);
        }
    }
}

function mostrarResultatFinal() {
    if (pOculta === paraula) {
        console.log(" Has guanyat! La paraula era: " + paraula);
    } else {
        console.log(" Has perdut. La paraula era: " + paraula);
    }
}