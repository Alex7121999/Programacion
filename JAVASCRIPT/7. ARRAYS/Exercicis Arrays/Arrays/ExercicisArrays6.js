"use strict"

//let n = [0,1,4,4,6,7,9];
//let n = [9,7,6,4,4,1,0];
let n = [1,3,5,5,4,2];
//let n = [5,5,5,5,5];

let ordreAscendent = true;
let ordreDescendent = true;

// Mostrar llista
for (let i = 0; i < n.length; ++i) {
    alert(n[i]);
}
// Els següents bucles es poden juntar en un si s'eliminen els break, però pot ser menys eficient

// Comprovar si ordre ascendent: Si un número és més petit que l'anterior, no ho és
for (let i = 1; i < n.length; ++i) {
    if (n[i] < n[i - 1]) {
        ordreAscendent = false;
        break;
    }
}

// Comprovar si ordre descendent: Si un número és més gran que l'anterior, no ho és
for (let i = 1; i < n.length; ++i) {
    if (n[i] > n[i - 1]) {
        ordreDescendent = false;
        break;
    }
}

// Si tots els números són iguals, ascendent i descendent!
if (ordreAscendent && ordreDescendent) {
    alert("\nÉs constant!");
} else if (ordreAscendent) {
    alert("\nOrdre ascendent");
} else if (ordreDescendent) {
    alert("\nOrdre descendent");
} else {
    alert("\nNo està ordenada");
}

