const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", {actual}, "===", {expected});
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", {actual}, "!==", {expected});
  }
};
  
const tail = function(arr) {
  return arr.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const word1 = [1,2,3,4,5,6,7];

tail(words); // no need to capture the return value since we are not checking it
tail(word1);
assertEqual(words.length, 3);
assertEqual(word1.length, 7);