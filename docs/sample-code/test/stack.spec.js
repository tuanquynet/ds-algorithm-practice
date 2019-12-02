/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const Stack = require('../stack');

/* eslint-disable prefer-arrow-callback */
describe('Stack', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('stack::push', async function() {
    const myStack = new Stack();
    myStack.push(1);

    expect(myStack.length()).to.equal(1);
  });

  it('stack::pop', async function() {
    const myStack = new Stack();
    myStack.push('a');

    expect(myStack.pop()).to.equal('a');
    expect(myStack.length()).to.equal(0);
  });

  it('stack::peek', async function() {
    const myStack = new Stack();
    myStack.push('a');

    expect(myStack.peek()).to.equal('a');
    expect(myStack.length()).to.equal(1);
  });

  it('stack::clear', async function() {
    const myStack = new Stack();
    myStack.push('a');
    myStack.push('b');

    expect(myStack.length()).to.equal(2);

    myStack.clear();
    expect(myStack.length()).to.equal(0);
  });
});
