/**
 * Demana un número fins que sigui correcte
 * @param {*} pregunta Pregunta que se li farà a l'usuari
 * @returns Valor introduït
 */
function introInt(pregunta) {
    let r = parseInt(prompt(pregunta));
    while (isNaN(r)) {
        alert("No has introduït cap número")
        r = parseInt(prompt(pregunta));
    }
    return r;
}

/**
 * Demana un número entre 'min' i 'max' fins que sigui correcte
 * @param {*} pregunta Pregunta que se li farà a l'usuari
 * @param {*} min Valor mínim
 * @param {*} max Valor màxim
 * @returns Valor introduït
 */
function introIntMinMax(pregunta, min, max) {
    let r = introInt(pregunta);
    while (r < min || r > max) {
        alert(`El valor ha d'estar entre ${min} i ${max}`);
        r = introInt(pregunta);
    }
    return r;
}