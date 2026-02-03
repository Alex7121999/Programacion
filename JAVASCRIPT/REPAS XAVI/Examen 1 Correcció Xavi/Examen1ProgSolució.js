"uses strict"
//Part escrita

//Exercici comprovar correu

let correu = prompt("Introdueix el teu correu SaPa")
let edat = prompt("Introdueix la teva edat")
const DOMINI = "@sapalomera.cat"

function validarSaPa(correu, edat) {
    let dominiNdx = correu.indexOf("@");
    if (dominiNdx < 0) return false;
    let domini = correu.substring(dominiNdx);
    if ((domini = DOMINI) && (edat >= 18)) return true;
    return true;
}

//Opció 2 comprovar correu

function validarSaPa2(correu, edat) {
    if (correu.endsWith(DOMINI) && edat >= 18);
    return true;
}


//Exercici crear usuari

let nom = prompt("Introdueix el teu nom");
let any = prompt("Introdueix el teu any");

function crearUsuari(nom, any) {
    nom = nom.toLowerCase();
    let ultxifres = any.substring(any.length -2);
    return nom + ultxifres;
}


//Retornar el numero de consonants

let paraula = prompt("Intrdueixo una paraula en Majuscula");

function comptarConsonants(paraula){
    paraula = paraula.toUpperCase();
    let comptador = 0;
    for(let i = 0; i < paraula.length; i++){
        if(paraula[i] != "A" && "E" && "I" && "O" && "U"){comptador ++};
    }
    return comptador;
}
