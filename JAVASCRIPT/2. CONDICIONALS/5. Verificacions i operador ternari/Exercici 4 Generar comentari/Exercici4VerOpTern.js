let nota;

nota = parseInt(prompt("Introdueix nota entre 1 i 10"));

if (nota >= 1 && nota <= 10) {
    if (nota < 3) alert("Has de millorar molt!");
    else if (nota < 5) alert("Falta una mica per aprovar");
    else if (nota < 7) alert("No vas malament pots millorar una mica");
    else if (nota < 9) alert("Bastant bé");
    else alert("Excel·lent!");
} else {    
    // Nota incorrecta
    if (nota < 1) alert("La nota no pot ser inferior a 1");
    else alert("La nota no pot ser superior a 10");
}

