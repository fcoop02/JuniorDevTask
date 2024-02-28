import { genPerson, odrediSpol } from "./genPerson.js";

/* const personInfo = {
  Ime: String,
  Prezime: String,
  DatumRodenja: Date,
  Godine: Number,
  Spol: String,
  GeoLokacija: GeolocationCoordinates,
}; */

const setOsoba = [];

let spol;

for (let i = 0; i <= 99; i++) {
  spol = odrediSpol();
  setOsoba.push(genPerson(spol));
}
console.log(setOsoba);
