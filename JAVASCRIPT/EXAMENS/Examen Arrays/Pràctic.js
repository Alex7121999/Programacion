//PROBLEMA 1

let c = [
    [3, 5, 6, 7, 8],
    [2, 4, 5, 7, 9],
    [1, 4, 0, 7, 3],
    [2, 5, 6, 8, 4]
];

function revisarCercat(c) {
    let valides = true;
    let totsValors = [];

    for (let fila of c) {
        for (let valor of fila) {
            totsValors.push(valor);
            if (valor < 4 || valor > 8) valides = false;
        }
    }

    totsValors.sort((a, b) => b - a);

    alert((valides ? "El cercat està correcte." : "S'han de revisar els valors del cercat.") +
        "\nValors ordenats: " + totsValors.join(", "));
}

revisarCercat(c);


//PROBLEMA 2

let llistaVaques = [
    "Frisona, 640", "Llemosina 710", "Bruna-670", "Catalana, 662",
    "Albera - 627", "Albera,-,650", "Llemosina 730", "Llemosina -680",
    "Catalna, 695", "Catalana 600", "Bruna- 750"
];

function calcularPesPerRaca(llistaVaques) {
    const expressioRegular = /^[A-Z][a-z]{4,10}[ ,\-]+(6\d{2}|7[0-4]\d|750)$/;

    let arrayRaces = [];
    let arrayPesos = [];

    for (let i = 0; i < llistaVaques.length; i++) {
        let dada = llistaVaques[i].trim();

        if (!expressioRegular.test(dada)) {
            throw new Error("Dada errònia: " + dada);
        }

        let nomRaca = "";
        let pesRaca = "";
        let pos = 0;

        while (pos < dada.length && !(/[0-9]/.test(dada[pos]))) {
            if (dada[pos] !== " " && dada[pos] !== "," && dada[pos] !== "-") {
                nomRaca += dada[pos];
            }
            pos++;
        }
        while (pos < dada.length) {
            if (/[0-9]/.test(dada[pos])) {
                pesRaca += dada[pos];
            }
            pos++;
        }

        let pes = parseInt(pesRaca);

        let indexRaca = arrayRaces.indexOf(nomRaca);
        if (indexRaca === -1) {
            arrayRaces.push(nomRaca);
            arrayPesos.push(pes);
        } else {
            arrayPesos[indexRaca] += pes;
        }
    }

    return {
        arrayRaces,
        arrayPesos
    };
}

function mostrarPesTotal(llistaVaques) {
    try {
        let resultat = calcularPesPerRaca(llistaVaques);
        let missatge = "Pes total per raça:\n";
        for (let i = 0; i < resultat.arrayRaces.length; i++) {
            missatge += resultat.arrayRaces[i] + ": " + resultat.arrayPesos[i] + "\n";
        }
        alert(missatge);
    } catch (error) {
        alert(error.message);
    }
}

mostrarPesTotal(llistaVaques);


//PROBLEMA 3

let ciutats = ["Barcelona", "Girona", "Lleida", "Tarragona", "Saragossa", "Terol"];

let distancies = [
    [0, 100, 156, 98, 296, 409],
    [100, 0, 256, 198, 396, 509],
    [156, 256, 0, 91, 140, 319],
    [98, 198, 91, 0, 231, 311],
    [296, 396, 140, 231, 0, 181],
    [409, 509, 319, 311, 181, 0]
];

function demanarCiutats() {
    let ciutat1 = prompt("Introdueix la ciutat d'origen:");
    let ciutat2 = prompt("Introdueix la ciutat de destí:");

    ciutat1 = ciutat1.toLowerCase();
    ciutat2 = ciutat2.toLowerCase();

    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < ciutats.length; i++) {
        if (ciutats[i].toLowerCase() === ciutat1) index1 = i;
        if (ciutats[i].toLowerCase() === ciutat2) index2 = i;
    }

    return [index1, index2];
}

let indexes = demanarCiutats();
let distancia = distancies[indexes[0]][indexes[1]];

alert("La distància entre " + ciutats[indexes[0]] + " i " + ciutats[indexes[1]] + " és: " + distancia + " km");
