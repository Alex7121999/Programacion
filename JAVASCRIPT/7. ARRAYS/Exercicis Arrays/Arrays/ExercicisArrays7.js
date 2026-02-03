"use strict"

let n1 = [1,1,1,1,1];
let n2 = [2,2,2,2,2];
//let n1 = [1,1,1,1,1];
//let n2 = [2,2,2];
//let n1 = [1,1,1];
//let n2 = [2,2,2,2,2];

let n3 = [];
let j = 0;

// Agafar la longitud de la llista més gran
let longitud = n1.length > n2.length ? n1.length : n2.length;

// Mostrar les dues llistes
for (let i = 0; i < n1.length; ++i) {
    console.log(n1[i] + " ");
}

for (let i = 0; i < n2.length; ++i) {
    console.log(n2[i] + " ");
}

// Barrejar les dues llistes
for (let i = 0; i < longitud; ++i) {
    // Només afegeix element de n1 si no s’ha arribat al final de n1
    if (i < n1.length) {
        n3[j] = n1[i];
        ++j;
    }
    // Només afegeix element de n2 si no s’ha arribat al final de n2
    if (i < n2.length) {
        n3[j] = n2[i];
        ++j;
    }
}

// Mostrar la llista barrejada
for (let i = 0; i < n3.length; ++i) {
    console.log(n3[i] + " ");
}