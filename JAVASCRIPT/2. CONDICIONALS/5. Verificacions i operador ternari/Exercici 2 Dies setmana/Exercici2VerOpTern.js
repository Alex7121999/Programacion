let dia;

dia = parseInt(prompt("Introdueix dia de la setmana (1-7)"));

if (dia >= 1 && dia <= 7){
    if (dia == 1) alert("Dilluns");
    if (dia == 2) alert("Dimarts");
    if (dia == 3) alert("Dimecres");
    if (dia == 4) alert("Dijous");
    if (dia == 5) alert("Divendres");
    if (dia == 6) alert("Dissabte");
    if (dia == 7) alert("Diumenge");
} else {
    alert("El dia ha d’estar entre 1 i 7");
}
// Versió amb operador ternari