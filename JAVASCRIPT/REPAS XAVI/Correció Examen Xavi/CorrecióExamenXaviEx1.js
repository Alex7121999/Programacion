function diaDePartit() {
    let equip1 = prompt("Nom de l'equip local");
    let equip2 = prompt("Nom de l'equip visitant");
    let punts1 = parseInt(prompt("Punts de l'equip local"));
    let punts2 = parseInt(prompt("Punts de l'equip visitant"));

    if (isNaN(punts1) || isNaN(punts2)) {
        if (isNaN(punts1)) alert("Error: puntuació de l'equip local no és vàlida");
        if (isNaN(punts2)) alert("Error: puntuació de l'equip visitant no és vàlida");
    } else {
        if (punts1 > punts2) {
            alert("Guanya " + equip1 + " amb " + punts1 + " punts");
        } else if (punts2 > punts1) {
            alert("Guanya " + equip2 + " amb " + punts2 + " punts");
        } else {
            alert("Empat entre " + equip1 + " i " + equip2 + " amb " + punts1 + " punts");
        }
    }
}