let t = parseInt(prompt("Introdueix la temperatura"));

// TODO: verificar NaN !!!

// Utilitzant operador ternari
let v = (t < 20) ? -1 : (t > 24 ? +1 : 0);

// Utilitzant if
if (t < 20) v= -1;
else if (t > 24) v = 1;
else v = 0;

if (v == -1) alert("Calefacció encesa");
else if (v == 1) alert("Aire condicionat encès");
else alert("Què bé! Estem estalviant energia!");

