let entrada = prompt("Introdueix un text:");
let sortida = substituirVocalsIConsonants(entrada);

function substituirVocalsIConsonants(text) {
    let resultat = "";
    let vocals = "aeiouàèéíïòóúüAEIOUÀÈÉÍÏÒÓÚÜ";
    let consonants = "bcdfghjklmnpqrstvwxyzçBCDFGHJKLMNPQRSTVWXYZÇ";

    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if (vocals.indexOf(c) !== -1) {
            resultat += "_";
        } else if (consonants.indexOf(c) !== -1) {
            resultat += "#";
        } else {
            resultat += c;
        }
    }
    return resultat;
}

alert("Text amb vocals i consonants substituïdes: " + sortida);