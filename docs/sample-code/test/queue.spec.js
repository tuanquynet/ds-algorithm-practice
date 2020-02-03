/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const Queue = require('../queue');

/* eslint-disable prefer-arrow-callback */
describe('Queue', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('queue::enqueue', async function() {
    const myQueue = new Queue();
    myQueue.enqueue('a');
    myQueue.enqueue('b');

    expect(myQueue.length()).to.equal(2);
  });

  it('queue::dequeue', async function() {
    const myQueue = new Queue();
    myQueue.enqueue('a');
    myQueue.enqueue('b');

    expect(myQueue.length()).to.equal(2);

    expect(myQueue.dequeue()).to.equal('a');
    expect(myQueue.length()).to.equal(1);
  });

  it('queue::peek', async function() {
    const myQueue = new Queue();
    myQueue.enqueue('a');
    myQueue.enqueue('b');

    expect(myQueue.peek()).to.equal('a');
    expect(myQueue.length()).to.equal(2);
  });

  it('queue::clear', async function() {
    const myQueue = new Queue();
    myQueue.enqueue('a');
    myQueue.enqueue('b');
    myQueue.clear();

    expect(myQueue.length()).to.equal(0);
  });
});
