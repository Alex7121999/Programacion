let temperatura;
let tos;
let presio;
let categoria;

// Introducció de dades
temperatura = parseFloat(prompt("Introdueix la temperatura (25-45)").replace(",","."));
tos = prompt("Introdueix el tipus de tos (No, Seca o Expectorant)").trim().toUpperCase();
presio = parseInt(prompt("Introdueix la presió (80-180)"));

if (isNaN(temperatura) || isNaN(presio)) {
    alert("La temperatura o la presió no són valors numèrics");
    return;
}

// Verificació de dades
if (temperatura < 25 || temperatura > 45) {
    alert("Temperatura incorrecta: " + temperatura + "\nLa temperatura ha d'estar entre 25 i 45");
    return;
}

tos = tos.toUpperCase();
//if (!(tos == "NO" || tos == "SECA" || tos == "EXPECTORANT")) {
if (tos != "NO" && tos != "SECA" && tos != "EXPECTORANT") {
    alert("Tipus de tos incorrecte: " + tos + "\nEl tipus de tos pot ser No, Seca o Expectorant");
    return;
}

if (presio < 80 || presio > 180) {
    alert("Presio incorrecta: " + presio + "\nLa presió ha d'estar entre 80 i 180");
    return;
}

// Assignar categoria
if (temperatura < 32 || temperatura > 42 || presio < 100) {
    categoria = 'M';
} else if (temperatura >= 35 && temperatura <= 38 &&
           tos == "NO" && presio >= 120 && presio <= 140) {
    categoria = 'E';
} else if (temperatura > 38 && tos == "EXPECTORANT") {
    categoria = 'D';
} else if (temperatura > 38 && tos == "SECA") {
    categoria = 'C';
} else if (temperatura >= 35 && temperatura <= 38 &&
           tos == "NO" && (presio < 120 || presio > 140)) {
    categoria = 'B';
} else {
    categoria = 'A';
}

// Acció que cal prendre
switch (categoria) {
    case 'M':
        alert("No hi ha res a fer.");
        // NO POSAR break; !!!
    case 'E':
        alert("Que esperi sentat... o estirat.");
        break;
    case 'D':
        alert("L'ha de visitar el neumòleg d'urgències.");
        break;
    case 'C':
        alert("Envia'l a la planta COVID.");
        break;
    case 'B':
        alert("Ràpid! Que vingui un cardiòleg!");
        break;
    case 'A':
        alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.");
        break;  // No imprescindible però convenient
                //  per si més endavant s'afegeixen casos o default
}

// Acció que cal prendre (amb IF)
if (categoria == 'M' || categoria == 'E') {
    if (categoria == 'M') {
        alert("No hi ha res a fer.");
    }
    alert("Que esperi sentat... o estirat.");
} else if (categoria == 'D') {
    alert("L'ha de visitar el neumòleg d'urgències.");
} else if (categoria == 'C') {
    alert("Envia'l a la planta COVID.");
} else if (categoria == 'B') {
    alert("Ràpid! Que vingui un cardiòleg!");
} else {
    alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.");
}