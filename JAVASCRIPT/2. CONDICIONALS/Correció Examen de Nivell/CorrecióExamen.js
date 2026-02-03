"use strict";

function mostrarMenu() {
    let option;
    do {
        /*
        console.log("=====Menu Principal=====");
        console.log("1 Dia de Partit");
        console.log("2 Comprovar Rookies");
        console.log(3. Ordenar rookies);
        console.log("4 Mostrar el titular");
        console.log("5 Sortir");
        console.log("========================");
        */

        option = prompt("Introdueix una opció:\n1 Dia de Partit\n2 Comprovar Rookies\n3 Ordenar rookies\n4 Mostrar el titular\n5 Sortir");

        //TODO: Cridar la funció adequada depenent de l'opció triada
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
                return;
        }
        while (option != "0");


        function diaDePartit() {
            let equip1 = prompt("Introdueix el nom de l'equip local:");
            let equip2 = prompt("Introdueix el nom de l'equip visitant:");
            let punts1 = parseInt(prompt("Introdueix els punts de l'equip local:"));
            let punts2 = parseInt(prompt("Introdueix els punts de l'equip visitant:"));

            if (isNaN(punts1) || isNaN(punts2)) {
                alert("Alguns dels valors no es un numero valid.");


            } else {
                let equipGuanyador = punts1 > punts2 ? equip1 : equip2;
                alert("L'equip guanyador es: " + equipGuanyador);
            }
        }


        function comprovarRookies() {
            let minuts = parseInt(prompt("Introdueix els minuts jugats:"));
            let punts = parseInt(prompt("Introdueix els punts anotats:"));
            let assistencies = parseInt(prompt("Introdueix les assistencies realitzades:"));

            if (isNaN(minuts) || isNaN(punts) || isNaN(assistencies)) {
                alert("Alguns dels valors no es un numero valid.");
            } else {
                if (minuts >= 5) {
                    let missatge = "Valoracio del rookie:\n";
                    if (punts >= 10 && assistencies >= 5) missatge += "Rookie Estrella";
                    else missatge += "Rookie Prometedor";
                    alert(missatge);
                } else {
                    alert("El jugador no es rookie");
                }
            }
        }

        function ordenarRookies() {
            let rookie1
            let rookie2
            let rookie3

            if (isNaN(rookie1) || isNaN(rookie2) || isNaN(rookie3)) {
                alert("Alguns dels valors no es un numero valid.");
            } else {
                if (puntsR1 >= puntsR2 && puntsR1 >= puntsR3) {
                    if (puntsR2 >= puntsR3) {
                        alert("R1: " + puntsR1 + "R2: " + puntsR2 + "R3: " + puntsR3);
                    } else {
                        alert("R1: " + puntsR1 + "R3: " + puntsR3 + "R2: " + puntsR2);
                    }





                    function mostrarTitular() {
                        const noticia = ("En un partit sorprenent celebrat al Madison Square Garden, els Knicks es passegen davant els BUlls amb un recital ofensiu que va fer vibrar el public");
                        let primera = noticia.indexOf("Knicks");
                        let ultima = noticia.lastIndexOf("Bulls");
                        alert(noticia.substring(primera, ultima));
                    }
                }
            }
        }
    }
}