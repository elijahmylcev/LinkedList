const Node = require('./Node')

// [root].next -> [node].next -> [node].next === null

class LinkedList {
  constructor() {
    this.root = null;
    // this.tail = null
  }

  push(newNode) {
    if (!this.root) {
      this.root = newNode;
      return true;
    }

    let current = this.root;
    
    while(current.next) {
      current = current.next;
    }

    // current === last
    current.next = newNode;

    return true;

    // if (this.root === null) {
    //   // first
    // }
    // if (this.root !== null) {
    //   // last
    // }

    // if (!this.head || !this.tail) {
    //   this.head = newNode;
    //   this.tail = newNode;
    //   return this;
    // }

    // this.tail.next = newNode
    // this.tail = newNode

    // if (this.tail.next === null && this.tail.value === value) {
    //   return true
    // }
    // return this
  }

  insert(value, index = this.length - 1) {
    const newNode = new Node(value)
    let out

    switch (index) {
      case 0:
        const node = new Node(value, this.head)
        this.head = node
        if (!this.tail) {
          this.tail = node
        }      
        return this
      case this.length - 1:
        this.push(value)
        return this
      default:
        let arr = this.toArray()
        const arr_1 = arr.slice(0, index)
        const arr_2 = arr.slice(index)
        arr_1.push(newNode)
        arr_1[arr_1.length - 2].next = newNode
        arr_1[arr_1.length - 1].next = arr_2[0]
        out = arr_1.concat(arr_2)
        return out
    }

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
    let arr = []
    let current = this.head

    while (current) {
      arr.push(current)
      current = current.next
    }
    return arr
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
