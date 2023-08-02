const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let arr = [];
  if (array.length < 3) {
    console.log("Empty array");
    return [];
  } else if (array.length % 2 === 0) {
    console.log("Inside function");
    arr.push(array[((array.length / 2) - 1)]);
    arr.push(array[(array.length / 2)]);
    return arr;
  } else {
    return array[Math.floor(array.length / 2)];
  }
};

module.exports = middle;