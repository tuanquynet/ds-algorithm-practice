class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  length() {
    return this.items.length;
  }

  clear() {
    this.items.length = 0;
  }
}

module.exports = Queue;
