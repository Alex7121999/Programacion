let nota

//Introduir la nota
nota = parseInt(prompt("Introdueix la nota (0-10): "));

if (isNaN(nota)) alert("La nota introduida no és un número vàlid.");

//Mostrar nota o missatge d'error
switch (nota) {
    case 10:
    case 9:
        alert("Nota alumne: A");
        break;
    case 8:
    case 7:
        alert("Nota alumne: B");
        break;
    case 6:
    case 5:
        alert("Nota alumne: C");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
        alert("Nota alumne: D");
        break;
    default:
        if (nota < 1) alert("La nota no pot ser mes petita que 1.");
        else if (nota > 10) alert("La nota no pot ser mes gran que 10.");
}