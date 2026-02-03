let t = parseInt(prompt("Introdueix la temperatura"));

// TODO: verificar NaN !!!

// Utilitzant operador ternari
let m = (t < 20) ? "On" : "Off";

// Utilitzant if
if (t < 20) m = "On";
else m =  "Off";

if (m == "On") alert("Calefacció encesa");
else alert("Calefacció apagada");