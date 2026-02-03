let temperatura;
let humitat;

temperatura = parseInt(prompt("Introdueix temperatura (0-40)"));
humitat = parseInt(prompt("Introdueix humitat (20-99)"));

if (temperatura < 5 || temperatura > 25 || humitat < 40 || humitat > 80) {
    alert("ALERTA! temperatura o humitat fora del rang adequat");
}