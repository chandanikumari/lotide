const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  for (const letters of sentence) {
    if (results[letters]) {
      results[letters] = results[letters] + 1;
    } else {
      results[letters] = 1;
    }
    
  }
  console.log(results);
  return results;
};

assertEqual(countLetters('LHL')['L'], 2);

countLetters('chandanikumari');

module.exports = countLetters;
