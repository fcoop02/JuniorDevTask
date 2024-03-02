const d3 = require("d3");
const topojson = require("topojson-client");
const world = require("./countries-110m.json");

countries = topojson.feature(world, world.objects.countries);

function randomBoundingBoxCoordinates(boundingBox) {
  const randomLongitude = d3.randomUniform(
    boundingBox[0][0],
    boundingBox[1][0] + 360 * (boundingBox[1][0] < boundingBox[0][0])
  );
  const randomLatitude = d3.randomUniform(boundingBox[0][1], boundingBox[1][1]);
  return () => [randomLongitude(), randomLatitude()];
}

exports.randomFeatureCoordinates = (feature) => {
  const featureBoundingBox = d3.geoBounds(feature);
  const randomCoordinates = randomBoundingBoxCoordinates(featureBoundingBox);
  return () => {
    let p;
    do {
      p = randomCoordinates();
    } while (!d3.geoContains(feature, p));
    return p;
  };
};

exports.countryFeature = (countryName) => {
  return countries.features.filter((f) => f.properties.name === countryName)[0];
};

function toRad(x) {
  return (x * Math.PI) / 180;
}

exports.distance = (lat, long) => {
  const iblerov = [45.813179, 15.98514];
  const r = 6371;
  const dLat = toRad(iblerov[0] - lat);
  const dLon = toRad(iblerov[1] - long);
  const lat1 = toRad(lat);
  const lat2 = toRad(iblerov[0]);

  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  const y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));

  const z = r * y;
  return z;
};
