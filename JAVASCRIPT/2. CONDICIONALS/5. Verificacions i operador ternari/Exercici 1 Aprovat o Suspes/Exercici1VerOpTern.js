let nota;

nota = parseInt(prompt("Introdueix la nota entre 0 i 10:"));

if (nota >= 0 && nota <= 10) {
    if (nota < 5) alert("Suspès");
    else alert("Aprovat");
} else { 
    // Nota incorrecta
    if (nota < 0) alert("La nota no pot ser inferior a 0");
    else alert("La nota no pot ser superior a 10");
}