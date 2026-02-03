function convertirSegons() {
    const segons = introIntMinMax(0, 359999);
    const hms = formatarHMS(segons);
    mostrarHMS(segons, hms);
}

function introIntMinMax(min, max) {
    let valor;
    do {
        valor = parseInt(prompt("Introdueix els segons (" + min + " - " + max + "):"), 10);
    } while (isNaN(valor) || valor < min || valor > max);
    return valor;
}

function formatarHMS(segons) {
    const hores = Math.floor(segons / 3600);
    const minuts = Math.floor((segons % 3600) / 60);
    const segonsRestants = segons % 60;

    const h = hores.toString().padStart(2, '0');
    const m = minuts.toString().padStart(2, '0');
    const s = segonsRestants.toString().padStart(2, '0');

    return h + ":" + m + ":" + s;
}

function mostrarHMS(segons, hms) {
    console.log("Has introduït " + segons + " segons.");
    console.log("Equival a: " + hms);
}

// Executar la funció
convertirSegons();