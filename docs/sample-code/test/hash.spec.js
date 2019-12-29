/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const SimpleHash = require('../hash');

/* eslint-disable prefer-arrow-callback */
describe('Hash', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('hash:: put and get', async function() {
    const hashTable = new SimpleHash(100);
    hashTable.put('abc', 123);

    expect(hashTable.get('abc')).to.equal(123);
  });

  it('hash::delete', async function() {
    const hashTable = new SimpleHash(100);
    hashTable.put('abc', 123);
    hashTable.delete('abc');

    expect(hashTable.get('abc')).to.equal(undefined);
  });

  it('hash::collision', async function() {
    const hashTable = new SimpleHash(100);
    let err = {};
    hashTable.put('ac', 123);

    expect(hashTable.put.bind(hashTable, 'ca', 345)).to.throw(/There is a collision/);
  });
});
