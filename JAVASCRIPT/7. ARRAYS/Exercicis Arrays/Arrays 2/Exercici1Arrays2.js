"use strict";

let frase = "Desenvolupament, Aplicacions, Web";
let paraules = [];

paraules = frase.trim().split(" ");

let resultat = "";
for (let i = 0; i < paraules.length; i++) {
    resultat += paraules[i] + "\n";
}
console.log(resultat);

paraules = frase.trim().split(", ");

resultat = "";
for (let i = 0; i < paraules.length; i++) {
    resultat += paraules[i] + " ";
}
console.log(resultat);

paraules = frase.trim().split(", ");

resultat = "";
for (let i = paraules.length - 1; i >= 0; i--) {
    resultat += paraules[i] + " ";
}
console.log(resultat);