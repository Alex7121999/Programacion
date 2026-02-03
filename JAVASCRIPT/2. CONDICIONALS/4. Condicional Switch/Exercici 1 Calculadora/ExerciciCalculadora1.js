let n1, n2;
let op;


n1 = parseFloat(prompt("Escriu el primer valor").replace(",", "."));
n2 = parseFloat(prompt("Escriu el segon valor".replace(",", ".")));
op = prompt("Escriu la operació que vols fer (+ - * o /)").charAt(0);

if (isNaN(n1) || isNaN(n2)) alert("Algun dels valors introduïts no és vàlid");
switch (op) {
    case '+':
        alert("Resultat: " + (n1 + n2));
        break;
    case '-':
        alert("Resultat: " + (n1 - n2));
        break;
    case '*':
        alert("Resultat: " + (n1 * n2));
        break;
    case '/':
        alert("Resultat: " + (n1 / n2));
        break;
    default:
        alert("No reconec l'operació " + op);
}


