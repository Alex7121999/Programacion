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


/**
 * Converteix l'array a text segons els paràmetres indicats
 * @param {Array} a Array a convertir
 * @param {boolean} multilinia Si true → cada element en una línia
 * @param {string} sep Separador si multilinia = false
 * @returns {string} Cadena generada segons la configuració
 */
function arrayToString(a, multilinia = true, sep = " ") {
    if (multilinia) {
        // Cada element amb salt de línia
        return a.join("\n");
    } else {
        // Una sola línia amb separador personalitzat
        return a.join(sep);
    }
}


/**
 * Mostra els valors de l'array segons la configuració indicada
 * @param {Array} a Array a mostrar
 * @param {boolean} multilinia Mostrar cada element en línia separada?
 * @param {string} sep Separador si multilinia = false
 */
function mostrarArray(a, multilinia = true, sep = " ") {
    let txt = arrayToString(a, multilinia, sep);
    alert(txt);
}

// --- PROGRAMA PRINCIPAL ---

// Demanar dades a l’usuari
let n = parseInt(prompt("Introdueix la mida de l'array (N):"));
let v = parseInt(prompt("Introdueix el valor amb què s'inicialitzarà (V):"));

// Crear l'array amb la funció
let resultat = initArrayInt(n, v);

// Preguntar com mostrar l'array
let mode = prompt("Vols mostrar l'array en múltiples línies? (sí/no)").toLowerCase();
let multilinia = (mode === "sí" || mode === "si");

// Si no és multilínia, demanem separador personalitzat
let separador = " ";
if (!multilinia) {
    separador = prompt("Introdueix el separador (per exemple , ; - |):");
}

// Mostrar resultats
mostrarArray(resultat, multilinia, separador);


