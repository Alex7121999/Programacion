"use strict";

let a1 = [];
let a2 = [];
let a3 = [];
let llista = [];

// Omplir a1 amb 10 nums aleatoris
for (let i = 0; i < 10; i++) {
    a1.push(Math.floor(Math.random() * 100 + 1));
}
console.log(a1.join(" "));

// Omplir a2 amb 10 nums aleatoris
for (let i = 0; i < 10; i++) {
    a2.push(Math.floor(Math.random() * 100 + 1));
}
console.log(a2.join(" "));

//Multiplicar un i mostrar resultat
for(let i = 0; i < a1.length; i++){
    a3.push((a1[i] * a2[i]));
}
console.log(a3.join(" "));


//Suma tots amb tots i mostrar resultat
for(let i = 0; i < a1.length; i++){
    for(let j = 0; j < a2.length; j++){
    a3[j]=((a1[i] + a2[j]));
}
console.log(a3.join(" "));
}
