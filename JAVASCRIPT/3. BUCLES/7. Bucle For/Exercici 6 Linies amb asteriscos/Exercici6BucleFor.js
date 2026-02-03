const n = parseInt(prompt("Quants asteriscos vols?"));
let line = "";

if (n < 1) {
    alert("El nombre d'asteriscos no pot ser menor que 1");
} else if (n > 80) {
    alert("El nombre d'asteriscos no pot ser major que 80");
} else {
    for (let i = 0; i < n; i++) {
        line += "*";
    }
    console.log(line);
}