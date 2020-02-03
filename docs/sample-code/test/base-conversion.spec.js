/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const {convertToBaseWithRecursion, convertToBase} = require('../exercises/base-conversion');

/* eslint-disable prefer-arrow-callback */
describe('Stack', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('base conversion::convert to base 2', async function() {
    expect(convertToBase(4, 2)).to.equal('100');
    expect(convertToBase(5, 2)).to.equal('101');
    expect(convertToBase(11, 2)).to.equal('1011');
  });

  it('base conversion::convert to base 8', async function() {
    expect(convertToBase(8, 8)).to.equal('10');
    expect(convertToBase(16, 8)).to.equal('20');
    expect(convertToBase(17, 8)).to.equal('21');
  });

  it('base conversion::convert to base 10', async function() {
    expect(convertToBase(8, 10)).to.equal('8');
    expect(convertToBase(16, 10)).to.equal('16');
    expect(convertToBase(17, 10)).to.equal('17');
  });

  it('base conversion::convert to base 2 with recursion', async function() {
    expect(convertToBaseWithRecursion(4, 2)).to.equal('100');
    expect(convertToBaseWithRecursion(5, 2)).to.equal('101');
    expect(convertToBaseWithRecursion(11, 2)).to.equal('1011');
  });

});
