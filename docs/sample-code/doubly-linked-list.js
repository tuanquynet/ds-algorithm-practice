class DLLNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    // Notes: Symbol is ES6 feature
    this.head = new DLLNode(Symbol('HEAD'));
  }

  find(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    return current;
  }

  /**
   * @param item element which new element will be inserted after
   */
  insert(newValue, item) {
    const current = (undefined === item)
      ? this.head
      : this.find(item);
    const newNode = new DLLNode(newValue, current.next);
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;

    return newNode;
  }

  findLast(value) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }

    return current;
  }

  remove(item) {
    const current = this.find(item);
    if (!current) {
      return;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }
    if (current.prev) {
      current.prev.next = current.next;
    }

    current.next = null;
    current.prev = null;

    return current;
  }
}

module.exports = DoublyLinkedList;
