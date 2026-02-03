/**
 * Crea un array amb N números enters i inicialitza
 * totes les seves posicions amb el valor V.
 * @param {number} n Nombre d'elements de l'array
 * @param {number} v Valor amb què s'inicialitzen tots els elements
 * @returns {Array} Array d'enters amb N posicions iguals a V
 */
function initArrayInt(n, v) {
    let a = [];
    for (let i = 0; i < n; ++i) {
        a[i] = v;
    }
    return a;
}

// Demanar dades a l’usuari
let n = parseInt(prompt("Introdueix la mida de l'array (N):"));
let v = parseInt(prompt("Introdueix el valor amb què s'inicialitzarà (V):"));

// Crear l'array amb la funció
let resultat = initArrayInt(n, v);

// Mostrar resultats
alert("Mida de l'array: " + n + "\nValor d'inicialització: " + v);

console.log("Array generat:");
console.log(resultat.join(" "));
