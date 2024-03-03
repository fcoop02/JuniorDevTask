const genPerson = require("./genPerson");
const { distance } = require("./geoLoc");
const { MaleFemale, quickSort, addFiveYears } = require("./utils.js");

const arrPerson = [];

for (let i = 0; i <= 99; i++) {
  let s = MaleFemale();
  arrPerson.push(genPerson(s));
}
console.log("Kreirani set osoba:");
console.table(arrPerson);

let min = distance(arrPerson[0].geoLoc[0], arrPerson[0].geoLoc[1]);

console.log("Sortirani set osoba:");
const sortedarrPerson = quickSort(arrPerson, "lastName");
sortedarrPerson.forEach((element) => {
  let a = element.lastName + ", " + element.firstName;
  if (distance(element.geoLoc[0], element.geoLoc[1]) < min) {
    min = distance(element.geoLoc[0], element.geoLoc[1]);
  }
  console.log(a);
});

sortedarrPerson.forEach((element) => {
  if (distance(element.geoLoc[0], element.geoLoc[1]) == min) {
    console.log("Osoba najbliže Iblerovom trgu 10: ", element);
  }
});

const oldArrPerson = Array.from(arrPerson);
oldArrPerson.forEach((element) => {
  element.age = element.age + 5;
  const date = new Date(addFiveYears(element.dateOfBirth));
  element.dateOfBirth = date.toLocaleDateString("en-GB");
});
console.table(oldArrPerson);
