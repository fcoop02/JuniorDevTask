const {
  odrediGod,
  odrediMuskoIme,
  odrediPrezime,
  odrediZenskoIme,
  genrandomDate,
  swap,
} = require("./utils");

const { countryFeature, randomFeatureCoordinates } = require("./geoLoc");

const croatia = countryFeature("Croatia");

randomCroatiaCoordinates = randomFeatureCoordinates(croatia);

module.exports = (spol) => {
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
      GeoLokacija: swap(randomCroatiaCoordinates()),
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
      GeoLokacija: swap(randomCroatiaCoordinates()),
    };
    return personInfo;
  }
};
