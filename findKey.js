const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

let findKeyObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(findKeyObj, x => x.stars === 2), "noma"); // => "noma"
assertEqual(findKey(findKeyObj, x => x.stars === 3), "Akaleri"); // => "Akaleri"
assertEqual(findKey(findKeyObj, x => x.stars === 5, undefined)); // => undefined