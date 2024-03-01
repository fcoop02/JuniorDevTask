import * as d3 from "./node_modules/d3/dist/d3.js";
/* import { default as geoBounds } from "./node_modules/d3-geo/src/bounds.js"; */
import * as topojson from "./node_modules/topojson-client/dist/topojson-client.js";
const response = await fetch("./countries-110m.json");
const world = await response.json();
console.log(world);

/*countries = topojson.feature(world, world.objects.countries);*/

export function randomBoundingBoxCoordinates(boundingBox) {
  const randomLongitude = d3.randomUniform(
    boundingBox[0][0],
    boundingBox[1][0] + 360 * (boundingBox[1][0] < boundingBox[0][0])
  );
  const randomLatitude = d3.randomUniform(boundingBox[0][1], boundingBox[1][1]);
  return () => [randomLongitude(), randomLatitude()];
}

export function randomFeatureCoordinates(feature) {
  const featureBoundingBox = d3.geoBounds(feature);
  const randomCoordinates = randomBoundingBoxCoordinates(featureBoundingBox);
  return () => {
    let p;
    do {
      p = randomCoordinates();
    } while (!d3.geoContains(feature, p));
    return p;
  };
}

export function countryFeature(countryName) {
  return 0; /* countries.features.filter((f) => f.properties.name === countryName)[0]; */
}

const croatia = countryFeature("croatia");

randomCroatiaCoordinates = randomFeatureCoordinates(croatia);

randomCroatiaCoordinates();
