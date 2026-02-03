let mes;
let any;

// Introduir mes, elimiar espais inicials i finals, i pasar a majúscules

mes = prompt("Introdueix el nom d'un mes").trim().toUpperCase();

// Mostrar dies del mes (preguntar any si es febrer)
switch (mes) {
    case "GENER":
    case "MARÇ":
    case "MAIG":
    case "JULIOL":
    case "AGOST":
    case "OCTUBRE":
    case "DESEMBRE":
        // Mesos de 31 dies
        alert("Nombre de dies: 31");
        break;

    case "ABRIL":
    case "JUNY":
    case "SETEMBRE":
    case "NOVEMBRE":
        // Mesos de 30 dies
        alert("Nombre de dies: 30");
        break;

    case "FEBRER":
        // Preguntar any
        any = parseInt(prompt("Febrer pot tenir 28 o 29 dies depenent de l'any\nPer a quin any ho vols saber? "));

            // Mostrar 28/29 dies si és any de traspàs
            if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
                alert("Nombre de dies: 29");
            else
                alert("Nombre de dies: 28");
            break;

            default:
            // Si no reconeix el nom
            alert("No reconec el mes " + mes);
        }