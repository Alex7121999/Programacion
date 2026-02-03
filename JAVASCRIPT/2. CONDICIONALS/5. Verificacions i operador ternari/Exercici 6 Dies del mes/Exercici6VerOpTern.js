let mes = parseInt(prompt("Introdueix número del mes (1-12)"));

// TODO: verificar NaN !!!

if (mes >= 1 && mes <= 12) {
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
        alert("31 dies");
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
        alert("30 dies");
    else {
        let any = parseInt(prompt("Quin any?"));
        if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
            alert("29 dies");
        else
            alert("28 dies");
    }
} else {
    alert("Error: mes ha d'estar entre 1 i 12");
}