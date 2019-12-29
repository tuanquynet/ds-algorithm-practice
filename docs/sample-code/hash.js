class SimpleHash {
  constructor(size) {
    this.size = size;
    this.values = [];
    this.hash = this.simpleHash;
  }

  /**
   * @param {String} Key
   */
  simpleHash(key) {
    if (!key) {
      throw new Error("Key must be a string.");
    }

    const len = key.length;
    let sum = 0;
    for (let index = 0; index < len; index++) {
      sum += key.charCodeAt(index);
    }

    return sum % this.size;
  }

  betterHash(key) {
    const H = 37;
    var total = 0;

    for (var i = 0; i < key.length; ++i) {
      total += (H * total) + key.charCodeAt(i);
    }

    total = total % this.values.length;
    if (total < 0) {
      total += this.values.length - 1;
    }

    return parseInt(total, 10);
  }

  put(key, value) {
    const hashedIndex = this.hash(key);
    if (this.values[hashedIndex] && this.values[hashedIndex] !== value) {
      throw new Error("There is a collision");
    } else if (this.size === this.values.length) {
      throw new Error("Hashing table is full.");
    } else {
      this.values[hashedIndex] = value;
    }
  }

  get(key) {
    const hashedIndex = this.hash(key);

    return this.values[hashedIndex];
  }

  delete(key) {
    const hashedIndex = this.hash(key);

    this.values.splice(hashedIndex, 1);
  }
}

module.exports = SimpleHash;
