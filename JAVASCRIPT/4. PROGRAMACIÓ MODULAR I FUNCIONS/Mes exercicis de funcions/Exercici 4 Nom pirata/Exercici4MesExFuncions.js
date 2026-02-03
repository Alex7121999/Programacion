transformaNomPirata();

function transformaNomPirata() {
      const nom = prompt("Escriu el teu nom per convertir-lo en nom pirata:");
      let nomPirata = "";

      if (!nom || nom.trim() === "") {
        nomPirata = "No s'ha introduït cap nom!";
      } else {
        const net = nom.trim();
        const ultimaLletra = net.slice(-1).toLowerCase();
        if (ultimaLletra === "a") {
          nomPirata = net + " la Terrible";
        } else if (ultimaLletra === "o") {
          nomPirata = net + " el Temerari";
        } else {
          nomPirata = net + " el Corsari";
        }
      }

      alert("El teu nom pirata és: " + nomPirata);
      document.getElementById("resultat").innerHTML = " " + nomPirata;
    }
