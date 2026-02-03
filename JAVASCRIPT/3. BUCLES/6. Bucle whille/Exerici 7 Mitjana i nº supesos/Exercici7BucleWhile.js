"use script";

let nota, suspensos = 0, total = 0, numNotes = 0;

do {
    nota = parseInt(prompt("Introdueix una nota entre 1 i 10 (0 per acabar)"));
    if (nota > 0 && nota <= 10) {
        total += nota;
        ++numNotes;
    if (nota < 5) ++suspensos;
    } else {
        if (nota !== 0) alert("La nota es incorrecta");
    }
} while (nota != 0);

    if (numNotes > 0) {
        alert("Suspensos:" + suspensos);
        alert("Mitjana:" + (total / numNotes));
    } else {
        alert("No s'han introduit notes");
    }
