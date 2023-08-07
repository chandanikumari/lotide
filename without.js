const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let arr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arr.push(source[i]);
    }
  }
  console.log(arr);
  return arr;
};

// Testing the without function
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

module.exports = without;