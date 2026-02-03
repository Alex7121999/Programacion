function encriptar(text, salt) {
  let resultat = "";

  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i);
    let code = text.charCodeAt(i);

    if (c >= "A" && c <= "Z") {
      resultat += String.fromCharCode(((code - 65 + salt) % 26) + 65);
    } else if (c >= "a" && c <= "z") {
      resultat += String.fromCharCode(((code - 97 + salt) % 26) + 97);
    } else {
      resultat += c;
    }
  }

  return resultat;
}

let text = prompt("Introdueix un text:");
let salt = parseInt(prompt("Introdueix el valor de desplaçament (ex: 3):"));
let resultat = encriptar(text, salt);
alert("Text encriptat: " + resultat);