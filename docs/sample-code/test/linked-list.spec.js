/**
 * Test linked-list implementation
 */
/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const LinkedList = require('../linked-list');

/* eslint-disable prefer-arrow-callback */
describe('Linked List', function() {
  it('LinkedList::insert', async function() {
    const linkedList = new LinkedList();
    linkedList.insert(1);

    let node = linkedList.find(1);
    expect(node.value).to.equal(1);

    linkedList.insert(2, 1);
    node = linkedList.find(1);
    expect(node.next.value).to.equal(2);
  });

  it('LinkedList::remove', async function() {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.remove(1);

    const node = linkedList.find(1);
    expect(node).to.equal(null);
  });

  it('LinkedList::find', async function() {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);

    let node = linkedList.find(2);
    expect(node.value).to.equal(2);

    node = linkedList.insert(10);
    expect(node.value).to.equal(10);
  });
});
