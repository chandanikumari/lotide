const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2,3,4,5,6,7 for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7]),[2,3,4,5,6,7]);
  });

  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});