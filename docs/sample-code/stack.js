class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }

  clear() {
    // this is a trick, but it work well
    this.items.length = 0;
  }
}

module.exports = Stack;
