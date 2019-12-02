Stack is a type of list where data are inserted and removed at the same end. Last added element will be taken off first.
ex: stack of plates in canteen.

The basic operations of typical stack are push(), pop(), peek(), length(),... Below is basic implementation of stack

```javascript
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
```
Conclusion:
- Stack is LIFO list
