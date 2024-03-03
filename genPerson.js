const {
  genYear,
  genMaleName,
  genLastName,
  genFemaleName,
  genrandomDate,
  swap,
} = require("./utils");

const { countryFeature, randomFeatureCoordinates } = require("./geoLoc");

const croatia = countryFeature("Croatia");

randomCroatiaCoordinates = randomFeatureCoordinates(croatia);

module.exports = (s) => {
  if (s == "Muško") {
    const startDate = new Date("01/01/1924");
    const endDate = new Date();
    const birthday = genrandomDate(startDate, endDate);
    const personInfo = {
      firstName: genMaleName(),
      lastName: genLastName(),
      dateOfBirth: birthday.toLocaleDateString("en-GB"),
      age: genYear(birthday, endDate),
      sex: "Muško",
      geoLoc: swap(randomCroatiaCoordinates()),
    };
    return personInfo;
  } else {
    const startDate = new Date("01/01/1924");
    const endDate = new Date();
    const birthday = genrandomDate(startDate, endDate);
    const personInfo = {
      firstName: genFemaleName(),
      lastName: genLastName(),
      dateOfBirth: birthday.toLocaleDateString("en-GB"),
      age: genYear(birthday, endDate),
      sex: "Žensko",
      geoLoc: swap(randomCroatiaCoordinates()),
    };
    return personInfo;
  }
};
