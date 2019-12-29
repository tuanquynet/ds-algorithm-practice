class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

/**
 * If collision occur, it will find next slot which is empty.
 */
class LinearProbingHash {
  constructor(size) {
    this.size = size;
    this.values = [];
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

  put(key, value) {
    const hashedIndex = this.hash(key);
    let pos = hashedIndex;
    let count = 1;
    let node = this.values[pos];

    while (node && node.key !== key && count < this.size) {
      pos++;
      pos = pos % this.size;
      count++;
      node = this.values[pos];
    }

    if (node && node.key !== key) {
      throw new Error('The hashing table run out of space');
    }

    this.values[pos] = new Node(key, value);
  }

  get(key) {
    const hashedIndex = this.hash(key);
    let pos = hashedIndex;
    let count = 1;

    let foundKey = this.values[pos] && this.values[pos].key;
    while (foundKey !== key && count < this.size) {
      pos++;
      pos = pos % this.size;
      count++;
      foundKey = this.values[pos] && this.values[pos].key;
    }

    // no matching key found
    if (count >= this.size) {
      return;
    }

    return this.values[pos] && this.values[pos].value;
  }

  delete(key) {
    const hashedIndex = this.hash(key);
    let count = 1;
    let sameHashedList = [];

    if (!this.values[hashedIndex]) {
      return;
    }

    sameHashedList.push(hashedIndex);

    // find all same hashed values
    let next;
    let index = hashedIndex;
    do {
      index++;
      index = index % this.size;
      count++;
      next = this.values[index];

      // Find all values which has same hashed index added before
      if (next && this.hash(next.key) === hashedIndex) {
        sameHashedList.push(index);
      }
    } while (next && count < this.size)

    if (sameHashedList.length > 1) {
      for (let index = 0; index < sameHashedList.length - 1; index++) {
        // shift up all values which has same hashed index
        let currentIndex = sameHashedList[index];
        let nextIndex = sameHashedList[index + 1];
        this.values[currentIndex] = this.values[nextIndex];
      }
    }


    let lastIndex = sameHashedList[sameHashedList.length - 1];
    this.values[lastIndex] = undefined;
  }
}

module.exports = LinearProbingHash;
