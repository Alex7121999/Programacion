let nota;

// Introduir nota (Lletra)
nota = prompt("Escriu la nota (A, B, C, D)").trim().charAt(0).toUpperCase(nota);

// Mostrar missatge segons la nota
switch (nota) {
    case 'A':
        alert("Nota: Excel·lent (9-10)");
        break;
    case 'B':
        alert("Nota: Notable (7-8)");
        break;
    case 'C':
        alert("Nota: Aprovat (5-6)");
        break;
    case 'D':
        alert("Nota: Suspès (0-4)");
        break;
    default:
        alert("No es reconeix la nota + " + nota);
}
    