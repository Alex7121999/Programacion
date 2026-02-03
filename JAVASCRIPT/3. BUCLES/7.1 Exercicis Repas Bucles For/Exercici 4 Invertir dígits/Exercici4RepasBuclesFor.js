let n = 1234567890;

alert("L'invers de " + n + " és ");
do {
    alert(n % 10);
    n /= 10;
} while(n > 0);
alert(n);

// Opcional
let r = "";
n = 1234567890;
alert("L'invers de " + n + " és ");
do {
    r += (n % 10);
    n /= 10;
} while(n > 0);
n = Integer.parseInt(r);
alert(n);
