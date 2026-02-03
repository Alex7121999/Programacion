//Posar aqui el patró a comprovar (DNI)

let pattern = /^[0-9]{8}[A-Z]$/;
let s = prompt("Introdueix un text");
while(s && s.toUpperCase() !== "Fi") {
    if(pattern.test(s)) alert(s + "COINCIDEIX AMB " + pattern);
    else alert(s + "No coincideix amb" + pattern);
    s = prompt("Introdueix un text");
}

//Comprovar matricula cotxe amb espai o guió

let pattern = /^[0-9]{4}[ -][A-Z]{3}$/; //Posar aqui el patró a comprovar
let s = prompt("Introdueix un text");
while(s && s.toUpperCase() !== "Fi") {
    if(pattern.test(s)) alert(s + "COINCIDEIX AMB " + pattern);
    else alert(s + "No coincideix amb" + pattern);
    s = prompt("Introdueix un text");
}

//Comprovar matricula cotxe amb espai o guió obligatori

let pattern = /^[0-9]{4}[ -][A-Z]?{3}$/; //Posar aqui el patró a comprovar
let s = prompt("Introdueix un text");
while(s && s.toUpperCase() !== "Fi") {
    if(pattern.test(s)) alert(s + "COINCIDEIX AMB " + pattern);
    else alert(s + "No coincideix amb" + pattern);
    s = prompt("Introdueix un text");
}
// ? equival a 0 o 1
// + equival 1 o mes
// * equival 0 o mes
// \ fa que els simbols especials tinguin nomes el seu valor com a simbol, perd el se significat especial.


let pattern = /^#([A-Fa-f\9]{3}|[A-Fa-f\9]{6})$/;
let s = prompt("Introdueix un text");
while(s && s.toUpperCase() !== "Fi"){
    if(pattern.test(s)) alert(s + "COINCIDEIX AMB" + pattern);
    else alert(s + "No coincideix amb" + pattern);
    s = prompt("Introdueix text");
}