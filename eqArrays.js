// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  }
  return false;
};

module.exports = eqArrays;