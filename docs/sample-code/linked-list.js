class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Notes: Symbol is ES6 feature
    this.head = new LLNode(Symbol('HEAD'), null);
  }

  find(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    return current;
  }

  /**
   * @newValue value of new element
   * @param item element which new element will be inserted after
   */
  insert(newValue, item) {
    const current = (undefined === item)
      ? this.head
      : this.find(item);

    if (!current) {
      return null;
    }

    const newNode = new LLNode(newValue, current.next);
    current.next = newNode;

    return newNode;
  }

  findPrevious(value) {
    let current = this.head;
    while ((current && current.next) && (current.next.value !== value)) {
      current = current.next;
    }

    return current;
  }

  remove(item) {
    const prev = this.findPrevious(item);
    if (!prev) {
      return null;
    }

    if (prev.next) {
      prev.next = (prev.next).next;
    }

    return prev.next;
  }

  clear() {
    this.head.next = null;
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current && current.next) {
      count++;
      current = current.next;
    }

    return count;
  }
}

module.exports = LinkedList;
