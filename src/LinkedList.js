const Node = require('./Node')

// [root].next -> [node].next -> [node].next === null

class LinkedList {
  constructor() {
    this.root = null;
  }

  unshift(newNode) {
    this.root = newNode;
    return true;
  }

  push(newNode) {
    if (!this.root) {
      return this.unshift(newNode);
    }
    let current = this.root;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
    return true;
  }

  insert(newNode, index = this.length - 1) {
    if (!this.root) return this.push(newNode);
    if (index === this.length - 1) return this.push(newNode);
    if (index === 0) return this.unshift(newNode);
    const prev = this.get(index - 1);
    const current = this.get(index);
    prev.next = newNode;
    newNode.next = current;
    return true;
  }

  get(index) {
    if (!this.root) return null;
    if (index > this.length || index < 0) return null;
    let current = this.root;
    let currentStep = 0;
    while(current.next && currentStep !== index) {
      current = current.next;
      currentStep += 1;
    }
    return current;
  }

  toArray() {
    const array = [];
    let current = this.root;
    while (current) {
      array.push(current);
      current = current.next;
    }
    return array;
  }

  get length() {
    if (!this.root) return 0;
    let current = this.root;
    let length = 1;
    while (current.next) {
      current = current.next
      length += 1;
    }
    return length
  }
}

module.exports = LinkedList
