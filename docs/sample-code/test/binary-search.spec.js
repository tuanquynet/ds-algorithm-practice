/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const {doBinarySearch} = require('../binary-search');

/* eslint-disable prefer-arrow-callback */
describe('Binary Search', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('search successfully', async function() {
    expect(doBinarySearch([1, 2, 10, 21, 31, 41, 45], 2)).to.equal(1);
    expect(doBinarySearch([1, 2, 10, 21, 31, 41, 45], 45)).to.equal(6);
    expect(doBinarySearch([1, 2, 10, 21, 31, 41, 45], 0)).to.equal(-1);
  });
});
