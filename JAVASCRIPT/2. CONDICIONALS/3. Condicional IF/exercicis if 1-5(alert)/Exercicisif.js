"use strict";
// Ex01 Calcula preu botiga Online
let preu = prompt("Introdueix el preu");
preu = parseFloat(preu);

// Aplicar descompte
if (preu >= 500) {preu -= preu * 10 / 100;}

// Afegir transport
if (preu < 20) {preu += 5;}

alert("El preu final és " + preu);

// Ex02 Comprovar contrasenya numèrica
const CONTRASENYA = 12345;
let contrasenya;

contrasenya = prompt("Introdueix la contrasenya");
contrasenya = parseInt(contrasenya);

if (contrasenya == CONTRASENYA) {alert("OK");} else {alert("ERROR");}

const CONTRASENYA2 = "12345"
let contrasenya2;

contrasenya2 = prompt("Indrodueix la contrasenya")
if (contrasenya2 == CONTRASENYA2) {alert("OK");} else {alert("ERROR");}

// Ex03 Comprovar multiples
let n1, n2;

n1 = parseInt(prompt("Introdueix el primer número"));
n2 = parseInt(prompt("Introdueix el segon número"));
 
if (n1 % n2 == 0) {alert(n1 + " és múltiple de " + n2);} else {alert(n1 + " NO és múltiple de " + n2);}

//Ex 04 Negatiu, positiu o cero
let numero = parseInt(prompt("Introdueix un numero enter"));

if (numero > 0) {alert("És positiu");} else if (numero < 0) {alert("És negatiu");} else {alert("És 0");}

//Ex 05 Que pots fer a la teva edat?

if (edat >= 18 && 80) alert("Pots conduir cotxe");
if (!(edat >= 16 && edat <=65 )) alert("No estas en edad de treballar");
if (edat <= 3) alert("Has d'anar a la guarderia");
if (edat >= 18 && edat<= 24) alert("Pots estudiar un CFGS");