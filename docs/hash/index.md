Hashing is a technique to speed up searching elements. Hashing use a Hash function to generate a key for each value before storing into an array. Collision maybe occur when hash function generate the same key for two or more value.

## Simple implementation
```javascript
class SimpleHash {
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
    if (this.values[hashedIndex] && this.values[hashedIndex] !== value) {
      throw new Error('There is a collision');
    } else if (this.size === this.values.length) {
      throw new Error('Hashing table is full.');
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
```

## Solve collision with separated chaining
```javascript

```
