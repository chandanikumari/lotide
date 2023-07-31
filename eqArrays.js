// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", {actual}, "===", {expected});
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", {actual}, "!==", {expected});
  }
};

const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log("True it is!");
    return true;
  }
  console.log("False it is!");
  return false;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true;
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false