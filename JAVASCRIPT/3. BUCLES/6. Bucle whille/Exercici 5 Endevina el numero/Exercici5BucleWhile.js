let num, resposta, intents = 0;

num = parseInt(Math.random() * 100 + 1);
do {
    resposta = parseInt(prompt("Introdueix un número entre 1 i 100"));

    ++intents;

    if (num > resposta) {
        alert("És més gran");
    } else if (num < resposta) {
        alert("És més petit");
    }
} while (resposta != num);

alert("Has encertat en " + intents + " intents");