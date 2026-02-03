"use script";

entrada();
calcul();
sortida();

function mostrarMenu();
do {
    let option;
    option = prompt("Introdueix una opció:\n1 Dia de Partit\n2 Comprovar Rookies\n3 Ordenar rookies\n4 Mostrar el titular\n5 Sortir");

    diaDePartit()
    comprovarRookies()
    ordenarRookies()
    mostrarTitular()

    switch (option) {
        case "1":
            diaDePartit();
            break;
        case "2":
            comprovarRookies();
            break;
        case "3":
            ordenarRookies();
            break;
        case "4":
            mostrarTitular();
            break;
        case "0":
            alert("Sortint del programa...");
            break;
        default:
            ("No reconec aquesta opció");
    }
    while (option != "0");
}
        let equip1 = prompt("Introdueix el nom de l'equip local:");
        let equip2 = prompt("Introdueix el nom de l'equip visitant:");
        let punts1 = parseInt(prompt("Introdueix els punts de l'equip local:"));
        let punts2 = parseInt(prompt("Introdueix els punts de l'equip visitant:"));

    function diaDePartit() {
        if (isNaN(punts1) || isNaN(punts2)) {
            alert("Alguns dels valors no es un numero valid.");

        } else {
            let equipGuanyador = punts1 > punts2 ? equip1 : equip2;
            alert("L'equip guanyador es: " + equipGuanyador);
        }
    }