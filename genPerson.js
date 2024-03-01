import {
  odrediGod,
  odrediMuskoIme,
  odrediPrezime,
  odrediZenskoIme,
  genrandomDate,
} from "./utils.js";

import { countryFeature, randomFeatureCoordinates } from "./geoLoc.js";

/* croatia = countryFeature("croatia");

randomCroatiaCoordinates = randomFeatureCoordinates(croatia); */

export function genPerson(spol) {
  if (spol == "Muško") {
    const startDate = new Date("01/01/1924");
    const endDate = new Date();
    const birthday = genrandomDate(startDate, endDate);
    const personInfo = {
      Ime: odrediMuskoIme(),
      Prezime: odrediPrezime(),
      DatumRodenja: birthday.toLocaleDateString("en-GB"),
      Godine: odrediGod(birthday, endDate),
      Spol: "Muško",
      GeoLokacija: " " /* randomCroatiaCoordinates() */,
    };
    return personInfo;
  } else {
    const startDate = new Date("01/01/1924");
    const endDate = new Date();
    const birthday = genrandomDate(startDate, endDate);
    const personInfo = {
      Ime: odrediZenskoIme(),
      Prezime: odrediPrezime(),
      DatumRodenja: birthday.toLocaleDateString("en-GB"),
      Godine: odrediGod(birthday, endDate),
      Spol: "Žensko",
      GeoLokacija: " " /* randomCroatiaCoordinates() */,
    };
    return personInfo;
  }
}
