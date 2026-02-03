"use script";

/**
 * Crea un caràcter aleatori entre 'codiInici' i 'codiFi', tots dos incluits
 * @param {*} codiInici Primer caràcter
 * @param {*} codiFi Últim caràcter
 * @returns Un caràcter aleatori entre 'codiInici' i 'codiFi'
 */

function caràcterAleatoriEntre(inici, fi) {
  let codiInici = inici.charCodeAt(0);
  let codiFi = fi.charCodeAt(0);

  let codiAleatori = Math.floor(Math.random() * (codiFi - codiInici + 1)) + codiInici;
  let caràcter = String.fromCharCode(codiAleatori);
  return caràcter;
}

alert(caràcterAleatoriEntre('A', 'Z'));