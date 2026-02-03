"use script";

let num, factorial;

num = parseInt(prompt("Introdueix un número enter més gran que 0"));

factorial = num;

while (num > 1) {
    --num;
    factorial *= num;
}

alert("El factorial és " + factorial);