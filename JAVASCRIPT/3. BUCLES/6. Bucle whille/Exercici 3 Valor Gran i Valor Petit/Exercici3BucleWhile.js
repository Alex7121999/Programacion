let resposta, mesGran, mesPetit;

resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
mesGran = resposta;
mesPetit = resposta;

while(resposta != 0) {
    resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
    if (resposta != 0) {
        if (resposta > mesGran) mesGran = resposta;
        if (resposta < mesPetit) mesPetit = resposta;
    }
}

if (mesGran == 0) {
    alert("No has introduït cap número");
} else {
    alert("El número més gran és " + mesGran);
    alert("El número més petit és " + mesPetit);
}