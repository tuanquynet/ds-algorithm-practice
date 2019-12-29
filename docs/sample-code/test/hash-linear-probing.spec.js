/* eslint-disable */
/* global describe, it, before, after, xdescribe, xit, beforeEach */
/* eslint-enable */

const chai = require('chai');

// why doesn't the expect natively support the async/await yet?
const expect = chai.expect;
const SimpleHash = require('../hash-linear-probing');

/* eslint-disable prefer-arrow-callback */
describe('Hash with linear probing', function() {
  after(async () => {
    // init and recreate table
    return true;
  });

  it('hash:: put and get', async function() {
    const hashTable = new SimpleHash(100);
    hashTable.put('abc', 123);

    expect(hashTable.get('abc')).to.equal(123);
  });

  it('hash:: delete', async function() {
    const hashTable = new SimpleHash(6);
    hashTable.put('ad', 111);//same hashedIndex
    hashTable.put('da', 222);//same hashedIndex with ad
    hashTable.put('bc', 333);//same hashedIndex with ad
    hashTable.put('cb', 444);//same hashedIndex with ad
    hashTable.put('bd', 555);
    // hashTable.put('bf', 666);

    hashTable.delete('ad');

    expect(hashTable.get('ad')).to.equal(undefined);
    expect(hashTable.get('bc')).to.equal(333);
    expect(hashTable.get('bd')).to.equal(555);
  });

  it('hash::put and get with collision', async function() {
    const hashTable = new SimpleHash(10);
    hashTable.put('ac', 123);
    hashTable.put('ca', 456);

    expect(hashTable.get('ca')).to.equal(456);
  });
});
