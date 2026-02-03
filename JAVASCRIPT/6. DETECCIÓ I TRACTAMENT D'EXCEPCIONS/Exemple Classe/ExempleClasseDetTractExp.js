"use script";
try {
    f1()
    
} catch (e) {
    alert(e);
    let element = document.createElement("div");
    document.body.appendChild(element);
    element.innerHTML = "ADEU";
}

function f1() {
    f2()
    console.log("f1 executada")
}

function f2() {
    f3()
    console.log("f2 executada")
}

function f3() {
    f4()
    console.log("f3 executada")
}    

function f4() {
    let element = document.getElementById("terminal");
    if (element === null) throw new Error("ERROOOOOOOORR!!!!");
    element.innerHTML = "hola";
    console.log("Tot OK");
}

console.log("Progama finalitzat correctament");

