"use script"

const CONTRASENYA = "4321";
let resposta;
let intents = 3;

resposta = prompt("Introdueix la contrasenya: ");
--intents;

while (resposta != CONTRASENYA && intents > 0) {
    alert("Contrasenya incorrecta. Et queden " + intents + " intents.");
    resposta = prompt("Introdueix la contrasenya: ");
    --intents;
}

if (resposta == CONTRASENYA) {
    alert("Contrasenya correcta!");
} else {
    alert("Contrasenya incorrecta. No et queden més intents.");
}