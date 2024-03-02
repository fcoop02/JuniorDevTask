const genPerson = require("./genPerson");
const { distance } = require("./geoLoc");
const {
  odrediSpol,
  genrandomDate,
  quickSort,
  addFiveYears,
} = require("./utils.js");

const setOsoba = [];

for (let i = 0; i <= 99; i++) {
  let spol = odrediSpol();
  setOsoba.push(genPerson(spol));
}
console.table(setOsoba);
let min = distance(setOsoba[0].GeoLokacija[0], setOsoba[0].GeoLokacija[1]);
const sortedSetOsoba = quickSort(setOsoba, "Prezime");
sortedSetOsoba.forEach((element) => {
  let a = element.Prezime + ", " + element.Ime;
  if (distance(element.GeoLokacija[0], element.GeoLokacija[1]) < min) {
    min = distance(element.GeoLokacija[0], element.GeoLokacija[1]);
  }
  console.log(a);
});

sortedSetOsoba.forEach((element) => {
  if (distance(element.GeoLokacija[0], element.GeoLokacija[1]) == min) {
    console.log(element);
  }
});

const oldSetOsoba = Array.from(setOsoba);
oldSetOsoba.forEach((element) => {
  element.Godine = element.Godine + 5;
  const date = new Date(addFiveYears(element.DatumRodenja));
  element.DatumRodenja = date.toLocaleDateString("en-GB");
});
console.table(oldSetOsoba);
