/**
 * Converteix un array a text afegint separador i salt (opcionals)
 * @param {*} a Array
 * @param {*} sep Separador
 * @param {*} salt Salt de línia
 * @returns Text generat
 */
function arrayToString(a, sep = "", salt = "") {
    return a.join(sep + salt);
}

/**
 * Converteix un array bidimensional a text afegint un separador
 * entre elements i un salt de línia entre files.
 * @param {*} a Array bidimensional
 * @param {*} sep Separador entre elements d'una fila
 * @returns Text generat
 */
function arrayBiToString(a, sep = " ") {
    let r = "";
    for (let fila of a) {
        r += arrayToString(fila, sep, "") + "\n"; 
    }
    return r;
}

// ------------------------------
// EXEMPLES PER MOSTRAR PER PANTALLA
// ------------------------------

let array1 = ["Hola", "que", "tal"];
let array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.body.innerHTML += "<pre>" + arrayToString(array1, " ", "") + "</pre>";
document.body.innerHTML += "<pre>" + arrayBiToString(array2, " ") + "</pre>";

