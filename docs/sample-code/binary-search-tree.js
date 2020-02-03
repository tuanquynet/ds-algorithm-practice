class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);

    if (null === this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    /* eslint-disable no-constant-condition */
    while (1) {
      let parent = current;
      if (current.data > data) {
        current = parent.left;
        if (null === current) {
          parent.left = node;
          break;
        }
      } else {
        current = parent.right;
        if (null === current) {
          parent.right = node;
          break;
        }
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (null === node) {
      return null;
    }

    if (data === node.data) {
      // node has no children
      if (null === node.left && null === node.right) {
        return null;
      }

      // node has no left child
      if (null === node.left) {
        return node.right;
      }

      // node has no right child
      if (null === node.right) {
        return node.left;
      }

      // node has two children
      var smallestNode = this.getSmallestNode(node.right);

      node.data = smallestNode.data;
      node.right = this.removeNode(node.right, smallestNode.data);

      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);

      return node;
    } else {
      node.right = this.removeNode(node.right, data);

      return node;
    }
  }

  // in-order traverse (left-parent-right)
  inOrder(node, callback) {
    /* eslint-disable no-negated-condition */
    if (null !== node) {
      this.inOrder(node.left);
      if (callback) {
        callback(node);
      } else {
        process.stdout.write(node.data + " ");
      }

      this.inOrder(node.right);
    }
  }

  // pre-order traverse (parent-left-right)
  preOrder(node, callback) {
    if (null !== node) {
      if (callback) {
        callback(node);
      } else {
        process.stdout.write(node.data + " ");
      }
      this.preOrder(node.left);
      // Notes: only work on NodeJS
      this.preOrder(node.right);
    }
  }

  // post-order traverse (left-right-parent)
  postOrder(node, callback) {
    if (null !== node) {
      this.postOrder(node.left);
      // Notes: only work on NodeJS
      this.postOrder(node.right);
      if (callback) {
        callback(node);
      } else {
        process.stdout.write(node.data + " ");
      }
    }
  }

  getMin(rootOfSubtree) {
    const node = this.getSmallestNode(rootOfSubtree);
    return node && node.data;
  }

  getSmallestNode(rootOfSubtree) {
    let current = rootOfSubtree || this.root;
    while (null !== current.left) {
      current = current.left;
    }

    return current;
  }

  getMax(rootOfSubtree) {
    let node = this.getBiggestNode(rootOfSubtree);

    return node && node.data;
  }

  getBiggestNode(rootOfSubtree) {
    let current = rootOfSubtree || this.root;
    while (null !== current.right) {
      current = current.right;
    }

    return current;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) {
        return value;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
}

module.exports = BinarySearchTree;
