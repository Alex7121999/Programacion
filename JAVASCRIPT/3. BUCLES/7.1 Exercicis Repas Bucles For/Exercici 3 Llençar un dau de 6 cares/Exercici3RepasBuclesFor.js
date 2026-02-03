let r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0; // Possibles resultats
let dau;

for (let i = 0; i < 1000000; ++i) {
    dau = Math.floor(Math.random() * 6);
    switch(dau) {
        case 0: ++r1; break;
        case 1: ++r2; break;
        case 2: ++r3; break;
        case 3: ++r4; break;
        case 4: ++r5; break;
        case 5: ++r6; break;
    }
}

alert("El numero 1 ha sortit " + r1 / 10000 + " vegades");
alert("El numero 2 ha sortit " + r2 / 10000 + " vegades");
alert("El numero 3 ha sortit " + r3 / 10000 + " vegades");
alert("El numero 4 ha sortit " + r4 / 10000 + " vegades");
alert("El numero 5 ha sortit " + r5 / 10000 + " vegades");
alert("El numero 6 ha sortit " + r6 / 10000 + " vegades");