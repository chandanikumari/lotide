const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);
  if (result === true) {
    console.log("✅✅✅ Assertion Passed:", {actual}, "===", {expected});
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", {actual}, "!==", {expected});
  }
};

assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual("Bootcamp", "Bootcap");