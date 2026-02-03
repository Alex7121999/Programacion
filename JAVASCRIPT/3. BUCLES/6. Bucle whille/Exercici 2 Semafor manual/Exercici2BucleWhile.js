let resposta;
let estat = 1;

do {
    switch (estat) {
        case 1:
            alert("Semafor en verd");
            break;
        case 2:
            alert("Semafor en groc");
            break;
        case 3:
            alert("Semafor en vermell");
            break;
    }

    // Demanar acció i canviar l'estat per finalitzar
    resposta = prompt("Acció del Semafor").trim().toUpperCase();
    if (resposta == "CANVI") {
        ++estat;
        if (estat > 3) estat = 1;
    } else {
        estat = -1;
    }
} while (estat != -1);

//Final del programa
alert("Progama del Semafor ha acabat.");