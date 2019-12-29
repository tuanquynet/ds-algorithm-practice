/**
 * With separated chaining, when collision occur, we still need to store that value at the same hashed index.
 * we can do so by using a new data structure such as an array or a linked list.
 * Normally the structure of as hash table should be like
 * [
 *  [key1, value1, key2, value2], // hashed index 0
 *  [key1, value1, key2, value2], // hashed index 1
 * ]
 */

/* eslint-disable no-undefined */
class Hash {
  constructor(size) {
    this.size = size;
    this.values = [];//
  }

  /**
   * @param {String} Key
   */
  hash(key) {
    if (!key) {
      throw new Error('Key must be a string.');
    }

    const len = key.length;
    let sum = 0;
    for (let index = 0; index < len; index++) {
      sum += key.charCodeAt(index);
    }

    return sum % this.size;
  }

  // Each hashed-key value will be an array in the format: [key1, value1, key2, value2,...]
  put(key, value) {
    const hashedIndex = this.hash(key);
    const pos = hashedIndex;
    const node = this.values[hashedIndex];

    if (!node) {
      this.values[pos] = [key, value];
      return;
    }

    let index = 0;
    let foundKey = node && node[index];
    while (undefined !== foundKey && foundKey !== key) {
      index += 2;
      foundKey = node[index];
    }

    node[index] = key;
    node[index + 1] = value;
  }

  get(key) {
    const hashedIndex = this.hash(key);
    const node = this.values[hashedIndex];

    let index = 0;
    let foundKey = node && node[index];
    while (undefined !== foundKey && foundKey !== key) {
      index += 2;
      foundKey = node[index];
    }

    return foundKey && node[index + 1];
  }

  delete(key) {
    const hashedIndex = this.hash(key);
    const node = this.values[hashedIndex];

    let index = 0;
    let foundKey = node && node[index];
    while (undefined !== foundKey && foundKey !== key) {
      index += 2;
      foundKey = node[index];
    }

    if (foundKey) {
      node.splice(index, 2);
    }
  }
}

module.exports = Hash;
