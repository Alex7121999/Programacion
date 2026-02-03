let min, max, maxIntents;
let num, resposta = 0, intents = 0;

console.log("Entre quins números he de pensar? ");
min = scan.nextInt();
max = scan.nextInt();
console.log("En quants intents ho vols fer? ");
maxIntents = scan.nextInt();

num = (int)(Math.floor() * (max - min + 1) + min);
for (let i = 0; i < maxIntents; i++) {
    console.log("Introdueix un número entre %d i %d: ", min, max);
    resposta = scan.nextInt();
    scan.nextLine();

    ++intents;

    if (num > resposta) {
        console.log("És més gran");
    } else if (num < resposta) {
        console.log("És més petit");
    } else {
        break;
    }
}
if (resposta == num)
    console.log("Has encertat en " + intents + " intents");
else
    console.log("Se t'han acabat els intents\nEra el " + num);
