const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, show) {
  for (const ob in obj) {
    if (obj[ob] === show) {
      return ob;
    }
  }
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const keys = Object.keys(bestTVShowsByGenre);
console.log(keys);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;