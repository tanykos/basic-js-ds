// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(element) {
    const node = new Node(element);

    if (this.head) {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  pop() {
    let topEl = this.head;
    this.head = this.head.next;
    this.size--;

    return topEl.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  Stack
};
