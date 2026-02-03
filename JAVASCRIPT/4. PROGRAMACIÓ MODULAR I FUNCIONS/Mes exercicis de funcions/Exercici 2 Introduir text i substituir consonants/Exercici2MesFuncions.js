let entrada = prompt("Introdueix un text:");
let sortida = substituirConsonants(entrada);

function substituirConsonants(text) {
  let resultat = "";
  let consonants = "bcdfghjklmnpqrstvwxyzçBCDFGHJKLMNPQRSTVWXYZÇ";

  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i);
    if (consonants.indexOf(c) !== -1) {
      resultat += "#";
    } else {
      resultat += c;
    }
  }

  return resultat;
}

alert("Text amb consonants substituïdes: " + sortida);