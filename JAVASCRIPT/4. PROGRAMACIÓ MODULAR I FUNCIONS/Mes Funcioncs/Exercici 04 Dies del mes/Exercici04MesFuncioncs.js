demanarMesIAny();

function demanarMesIAny() {
    let mes = parseInt(prompt("Introdueix un número de mes (1-12):"));
    let any = parseInt(prompt("Introdueix l'any:"));

    let dies = calcularDiesMes(mes, any);
    mostrarDiesMes(dies, mes, any);
}

function calcularDiesMes(mes, any) {
    if (mes >= 1 && mes <= 12) {
        if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) return 31;
        else if ([4, 6, 9, 11].includes(mes)) return 30;
        else return esAnyTraspas(any) ? 29 : 28;
    } else {
        return -1;
    }
}

function esAnyTraspas(any) {
    return (any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0);
}

function mostrarDiesMes(dies, mes, any) {
    if (dies === -1) {
        alert("El mes ha d'estar entre 1 i 12");
    } else {
        alert("El mes " + mes + " de l'any " + any + " té " + dies + " dies");
    }
}