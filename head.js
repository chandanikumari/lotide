// FUNCTION IMPLEMENTATION
const _ = require('lodash');
const assertEqual = require('./assertEqual');

const head = function(arr) {
  let firstElement = _.head(arr);
  return firstElement;
};

module.exports = head;