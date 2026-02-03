//Numeros múltiples de 2, 3 i 5

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) console.log(i + " és múltiple de 2");
    if (i % 3 == 0) console.log(i + " és múltiple de 3");
    if (i % 5 == 0) console.log(i + " és múltiple de 5");
}

// Múltiples de 2, 3 i 5 (de tots)
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0)
        console.log(i + " és múltiple de 2, 3 i 5");
}


//Convertir en while

while ()