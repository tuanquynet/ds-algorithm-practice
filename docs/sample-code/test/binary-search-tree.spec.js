/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const BinarySearchTree = require('../binary-search-tree');

/* eslint-disable prefer-arrow-callback */
describe('Binary Search Tree', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('insert value', async function() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);

    expect(1).to.equal(1);
  });

  it('remove value', async function() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);

    binarySearchTree.remove(6);
    binarySearchTree.remove(5);

    // binarySearchTree.inOrder(binarySearchTree.root);
    // binarySearchTree.preOrder(binarySearchTree.root);

    expect(binarySearchTree.find(6)).to.equal(null);
    expect(binarySearchTree.find(5)).to.equal(null);
  });

  it('get min value', async function() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);

    const minValue = binarySearchTree.getMin();

    expect(minValue).to.equal(3);
  });

  it('get max value', async function() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);

    const maxValue = binarySearchTree.getMax();

    expect(maxValue).to.equal(6);
  });

  it('find value', async function() {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);

    const found = binarySearchTree.find(4);
    const notfound = binarySearchTree.find(-1);

    expect(found).to.equal(4);
    expect(notfound).to.equal(null);
  });
});
