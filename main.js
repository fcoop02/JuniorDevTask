import { genPerson } from "./genPerson.js";
import { odrediSpol, genrandomDate } from "./utils.js";

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

const startDate = new Date("01/01/1924");
const endDate = new Date();
console.log(startDate);
console.log(endDate);
console.log(genrandomDate(startDate, endDate));
