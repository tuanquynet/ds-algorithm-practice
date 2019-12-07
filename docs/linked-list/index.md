Linked list is collection of objects called node. Each node is linked to other node. If you want to iterate through all elements we should start from the first. (constant time: O(n) )

We can add unlimited element to LinkedList

```javascript
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
```
An extended version of linked list is doubly linked list
The difference is each node will keep reference to next element and previous element. The last node does not has next element. The first node point to HEAD node as previous element.

```javascript
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

  clear(item) {
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

module.exports = DoublyLinkedList;

```
