let n = 1234567890;
let resultat = "";

alert("Els dígits de " + n + " són ");
do {
    resultat = (n % 10) + " " + resultat;
    n /= 10;
} while(n > 0);
alert(resultat);