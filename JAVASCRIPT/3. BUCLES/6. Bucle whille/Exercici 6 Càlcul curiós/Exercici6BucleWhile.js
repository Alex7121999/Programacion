let num, interaccions = 0;

num = parseInt(prompt("Introdueix un numero entre 1 i 100"));

while (num != 1){
    if (num % 2 == 0){
        num /= 2;
    } else {
        num = num * 3 + 1;
    }
    alert(num);
    ++interaccions;
}

alert("Interaccions:" + interaccions);
