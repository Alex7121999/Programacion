//Ex08
let frase3 = "Quan plou, plou tant que sembla que plourà tot el dia";
let paraula1 = "plou";

let primera = frase3.indexOf(paraula1);
let ultima = frase3.lastIndexOf(paraula1) + paraula1.length;
alert(frase3.substring(primera, ultima)); // ← aquí estava malament

primera = frase3.indexOf(paraula1) + paraula1.length;
ultima = frase3.lastIndexOf(paraula1);
alert(frase3.substring(primera, ultima));
