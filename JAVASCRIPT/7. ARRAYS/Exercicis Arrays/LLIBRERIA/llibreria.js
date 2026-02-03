"use strict";

/* =======================
   🏀 BÀSQUET
======================= */

export function guanyadorPartit(equip1, equip2, punts1, punts2) {
  if (isNaN(punts1) || isNaN(punts2)) {
    throw new Error("Els punts han de ser números");
  }
  return punts1 > punts2 ? equip1 : equip2;
}

export function valorarRookie(minuts, punts, assistencies) {
  if (minuts < 5) return "No valorable";
  if (punts > 10 && assistencies > 5) return "Rookie estrella";
  return "Rookie promesa";
}

export function ordenarRookies(p1, p2, p3) {
  return [p1, p2, p3].sort((a, b) => b - a);
}

/* =======================
   🎲 ALEATORI
======================= */

export function llençarMoneda(vegades = 100) {
  let cares = 0;
  let creus = 0;

  for (let i = 0; i < vegades; i++) {
    Math.random() < 0.5 ? cares++ : creus++;
  }
  return { cares, creus };
}

export function dau6Cares(vegades = 1000) {
  let comptador = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < vegades; i++) {
    comptador[Math.floor(Math.random() * 6)]++;
  }
  return comptador.map(v => (v / vegades) * 100);
}

/* =======================
   📰 STRINGS
======================= */

export function extreureTitular(text, inici, fi) {
  let p1 = text.indexOf(inici);
  let p2 = text.indexOf(fi) + fi.length;
  return text.substring(p1, p2);
}

/* =======================
   🆔 NIF
======================= */

const LLETRES_NIF = "TRWAGMYFPDXBNJZSQVHLCKE";

export function validarNIF(nif) {
  if (!/^[0-9]{8}[A-Z]$/.test(nif)) return false;
  let num = parseInt(nif.substring(0, 8));
  return nif[8] === LLETRES_NIF[num % 23];
}

/* =======================
   🚗 MATRÍCULA
======================= */

export function validarMatricula(matricula) {
  return /^[0-9]{4}-[A-Z]{3}$/.test(matricula);
}

/* =======================
   ⏱ TEMPS
======================= */

export function segonsAHMS(segons) {
  let h = Math.floor(segons / 3600);
  let m = Math.floor((segons % 3600) / 60);
  let s = segons % 60;
  return `${dosDigits(h)}:${dosDigits(m)}:${dosDigits(s)}`;
}

function dosDigits(n) {
  return n < 10 ? "0" + n : "" + n;
}

/* =======================
   📅 DATES
======================= */

export function diaSetmana(dia) {
  const dies = [
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
    "Diumenge"
  ];
  return dies[dia - 1] || "Dia incorrecte";
}

/* =======================
   📦 ARRAYS
======================= */

export function ordenarParaules(llista) {
  return [...llista].sort();
}

/* =======================
   🔢 MATRIUS (QUADRAT MÀGIC)
======================= */

export function esQuadratMagic(matriu) {
  const n = matriu.length;
  const suma = matriu[0].reduce((a, b) => a + b);

  for (let i = 0; i < n; i++) {
    if (matriu[i].reduce((a, b) => a + b) !== suma) return false;
    if (matriu.map(f => f[i]).reduce((a, b) => a + b) !== suma) return false;
  }

  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 += matriu[i][i];
    d2 += matriu[i][n - i - 1];
  }

  return d1 === suma && d2 === suma;
}
