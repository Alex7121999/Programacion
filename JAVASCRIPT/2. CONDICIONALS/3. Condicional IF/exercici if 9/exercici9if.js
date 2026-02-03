"use strict";

// Inputs per introduir els dos números
const iN1 = document.getElementById("iN1");
const iN2 = document.getElementById("iN2");

// Botons per fer els càlculs
const bSumar = document.getElementById("bSumar");
const bRestar = document.getElementById("bRestar");
const bMultiplicar = document.getElementById("bMultiplicar");
const bDividir = document.getElementById("bDividir");

// Element on mostrar el resultat
const resultat = document.getElementById("resultat");

// Quan es fa clic en els botons es crida la funció corresponent
bSumar.addEventListener("click", sumar);
bRestar.addEventListener("click", restar);
bMultiplicar.addEventListener("click", multiplicar);
bDividir.addEventListener("click", dividir);

// Funció suma
function sumar() {
    let n1 = parseFloat(iN1.value.replace(",", "."));
    let n2 = parseFloat(iN2.value.replace(",", "."));
    if (isNaN(n1) || isNaN(n2)) alert("Algun dels dos valors no és correcte");
    resultat.innerHTML = n1 + n2;
}

// Funció resta
function restar() {
    let n1 = parseFloat(iN1.value.replace(",", "."));
    let n2 = parseFloat(iN2.value.replace(",", "."));
    if (isNaN(n1) || isNaN(n2)) alert("Algun dels dos valors no és correcte");
    resultat.innerHTML = n1 - n2;
}

// Funció multiplicació
function multiplicar() {
    let n1 = parseFloat(iN1.value.replace(",", "."));
    let n2 = parseFloat(iN2.value.replace(",", "."));
    if (isNaN(n1) || isNaN(n2)) alert("Algun dels dos valors no és correcte");
    resultat.innerHTML = n1 * n2;
}

// Funció divisió
function dividir() {
    let n1 = parseFloat(iN1.value.replace(",", "."));
    let n2 = parseFloat(iN2.value.replace(",", "."));
    if (isNaN(n1) || isNaN(n2)) alert("Algun dels dos valors no és correcte");
    resultat.innerHTML = n1 / n2;
}