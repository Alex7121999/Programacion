function comprovarRookies() {
    let minuts = parseInt(prompt("Minuts per partit"));

    if (isNaN(minuts)) {
        alert("Els minuts no són un número vàlid");
    } else if (minuts >= 5) {
        let punts = parseInt(prompt("Punts per partit"));
        let assistencies = parseInt(prompt("Assistències per partit"));

        if (isNaN(punts) || isNaN(assistencies)) {
            alert("Punts o assistències no són números vàlids");
        } else {
            let missatge = "Valoració del rookie:\n";
            if (punts > 10 && assistencies > 5) {
                missatge += "Rookie estrella\n";
            } else {
                missatge += "Rookie promesa";
            }
            alert(missatge);
        }
    } else {
        alert("Aquest rookie no es valorarà");
    }
}