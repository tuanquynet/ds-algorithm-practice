/**
 * Test linked-list implementation
 */
/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const DoublyLinkedList = require('../doubly-linked-list');

/* eslint-disable prefer-arrow-callback */
describe('Double Linked List', function() {
  it('DoublyLinkedList::insert', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    doublyLinkedList.insert(2, 1);
    doublyLinkedList.insert(3, 2);

    let node = doublyLinkedList.find(2);
    expect(node.value).to.equal(2);
    expect(node.next.value).to.equal(3);
    expect(node.prev.value).to.equal(1);
  });

  it('DoublyLinkedList::insert at the front by omitting specifying position value', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    doublyLinkedList.insert(2);

    let node = doublyLinkedList.find(2);
    expect(node.next.value).to.equal(1);
  });

  it('DoublyLinkedList::remove', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    doublyLinkedList.insert(2, 1);
    doublyLinkedList.insert(3, 2);
    doublyLinkedList.remove(2);

    const node = doublyLinkedList.find(2);
    expect(node).to.equal(null);
  });

  it('DoublyLinkedList::find', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    doublyLinkedList.insert(2, 1);

    let node = doublyLinkedList.find(2);
    expect(node.value).to.equal(2);

    node = doublyLinkedList.insert(10);
    expect(node.value).to.equal(10);
  });

  it('DoublyLinkedList::clear', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    doublyLinkedList.insert(2, 1);
    doublyLinkedList.clear();

    let node = doublyLinkedList.find(2);
    expect(node).to.equal(null);
  });

  it('DoublyLinkedList::count', async function() {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insert(1);
    expect(doublyLinkedList.count()).to.equal(1);

    doublyLinkedList.insert(2);
    expect(doublyLinkedList.count()).to.equal(2);
  });
});
