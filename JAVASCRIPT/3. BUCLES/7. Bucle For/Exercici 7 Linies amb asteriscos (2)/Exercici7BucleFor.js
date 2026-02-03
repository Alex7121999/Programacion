const n = parseInt(prompt("Quants asteriscos vols? "), 10);
let line = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if ( j == i) {
            line += "*\n";
        }
        else {
            line += "* ";
            }

    } 
}
    alert(line); // o console.log(line)<----(se mira en la consola del navegador)