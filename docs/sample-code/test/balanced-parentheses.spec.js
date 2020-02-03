/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const checkBalancedParentheses = require('../exercises/check-balanced-parentheses');

/* eslint-disable prefer-arrow-callback */
describe('Stack', function() {
  it('balanced parentheses', async function() {
    expect(checkBalancedParentheses('2 + 3')).to.equal(true);
    expect(checkBalancedParentheses('2 * (5 + 3)')).to.equal(true);
    expect(checkBalancedParentheses(' 2 * (3)')).to.equal(true);
    expect(checkBalancedParentheses('[2, 2] + [5,2]')).to.equal(true);

    expect(checkBalancedParentheses('2 + 3 (')).to.equal(false);
    expect(checkBalancedParentheses('2 + 3 )(')).to.equal(false);
    expect(checkBalancedParentheses('2 + 3 [(')).to.equal(false);
    expect(checkBalancedParentheses('2 + 3 [(]')).to.equal(false);
  });

});
