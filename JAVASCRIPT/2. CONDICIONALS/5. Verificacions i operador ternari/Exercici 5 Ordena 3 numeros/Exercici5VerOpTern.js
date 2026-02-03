let n1, n2, n3;

n1 = parseInt(prompt("Introdueix primer número"));
n2 = parseInt(prompt("Introdueix segon número"));
n3 = parseInt(prompt("Introdueix tercer número"));

if (n1 <= n2 && n1 <= n3) {    // n1 és el més petit
    if (n2 < n3) alert(n1 + " " + n2 + " " + n3);
    else alert(n1 + " " + n3 + " " + n2);
} else if (n2 <= n1 && n2 <= n3) {    // n2 és el més petit
    if (n1 < n3) alert(n2 + " " + n1 + " " + n3);
    else alert(n2 + " " + n3 + " " + n1);
} else {     // n3 és el més petit
    if (n1 < n2) alert(n3 + " " + n1 + " " + n2);
    else alert(n3 + " " + n2 + " " + n1);
}
// Ordenar tres números introduïts per l'usuari i mostra'ls en ordre creixent.