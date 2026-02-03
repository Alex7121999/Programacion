"use strict";

demanarContrasenya();

function demanarContrasenya() {
    let contra;
    let valida = false;
    while (!valida) {
        contra = prompt("Introdueix una contrasenya:\n" +
            "Mínim una majúscula (A-Z)\n" +
            "Mínim una minúscula (a-z)\n" +
            "Mínim un número (0-9)");
        let Maj = false;
        let Min = false;
        let Num = false;
        for (let i = 0; i < contra.length; i++) {
            const c = contra[i];
            if (c >= 'A' && c <= 'Z') Maj = true;
            else if (c >= 'a' && c <= 'z') Min = true;
            else if (c >= '0' && c <= '9') Num = true;
        }
        valida = Maj && Min && Num;
        if (!valida) {
            alert("Contrasenya incorrecta. Torna-ho a intentar.");
        }
    }
    alert("Contrasenya acceptada!");
    return contra;
}

mostrarMenu();

function mostrarMenu() {
    let opcio;

    do {
        opcio = prompt(
            "MENÚ:\n" +
            "A - Valoració usuari\n" +
            "B - Buscar paraula\n" +
            "C - Participar en un sorteig\n" +
            "Z - Sortir del programa\n" +
            "Introdueix una opció:"
        );

        switch (opcio.toUpperCase()) {
            case "A":
                valoracioUsuari();
                break;
            case "B":
                buscarParaula();
                break;
            case "C":
                participarSorteig();
                break;
            case "Z":
                alert("Sortint del programa...");
                break;
            default:
                alert("Opció no vàlida. Torna-ho a intentar.");
        }
    } while (opcio.toUpperCase() !== "Z");
}

function valoracioUsuari() {
    let hores;
    let entradaValida = false;
    while (!entradaValida) {
        hores = prompt("Quantes hores setmanals dediques a escoltar música?");
        hores = Number(hores);
        if (!isNaN(hores) && hores >= 0) {
            entradaValida = true;
        } else {
            alert("Introdueix un número (0 o més).");
        }
    }
    let categoria = " ";
    if (hores <= 10) {
        categoria = "Casual";
    } else if (hores <= 30) {
        categoria = "Fan";
    } else if (hores <= 60) {
        categoria = "Superfan";
    } else {
        categoria = "Adicte";
    }
    alert("Classificació: " + categoria);
    return categoria;
}

function buscarParaula() {
    const lletra = prompt("Introdueix la lletra de la cançó:");
    const paraula = prompt("Introdueix la paraula que vols buscar:");
    let comptador = 0;
    let paraulaActual = "";
    for (let i = 0; i <= lletra.length; i++) {
        const c = lletra[i];
        if (c === " " || c === "\n" || i === lletra.length) {
            if (paraulaActual === paraula) {
                comptador++;
            }
            paraulaActual = "";
        } else {
            paraulaActual += c;
        }
    }
    alert("La paraula \"" + paraula + "\" apareix " + comptador + " vegades.");
    return comptador;
}

function demanarNumero(min, max, n1, n2) {
    let num;
    let valid = false;
    while (!valid) {
        num = prompt("Introdueix un número entre " + min + " i " + max + ":");
        num = Number(num);
        if (isNaN(num)) {
            alert("Això no és un número. Torna-ho a intentar.");
        } else if (num < min || num > max) {
            alert("El número ha d'estar entre " + min + " i " + max + ".");
        } else if (num === n1 || num === n2) {
            alert("Aquest número ja ha estat triat. Introdueix-ne un de diferent.");
        } else {
            valid = true;
        }
    }
    return num;
}

function participarSorteig() {
    const min = 0;
    const max = 99;
    const n1 = demanarNumero(min, max, null, null);
    const n2 = demanarNumero(min, max, n1, null);
    const n3 = demanarNumero(min, max, n1, n2);
    alert("Has triat: " + n1 + ", " + n2 + ", " + n3);
    let trobat1 = false;
    let trobat2 = false;
    let trobat3 = false;
    let intents = 0;
    while (!(trobat1 && trobat2 && trobat3)) {
        const aleatori = Math.floor(Math.random() * 100);
        intents++;
        if (aleatori === n1) trobat1 = true;
        if (aleatori === n2) trobat2 = true;
        if (aleatori === n3) trobat3 = true;
    }
    alert("S'han generat " + intents + " números fins que han sortit tots els triats.");
    return intents;
}