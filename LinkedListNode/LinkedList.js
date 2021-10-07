const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode
    this.tail = newNode

    if (this.tail.next === null && this.tail.value === value) {
      return true
    }
    return this
  }

  insert(value = null, index = null) {
    const newNode = new Node(value)

  }

  get(index) {
    const set = this.toArray()
    for (let i = 0; i <= set.length; i++) {

      if (index === i) {
        return set[i]
      } else if (index > set.length) {
        return null
      }
    }
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
    let current = this.head
    let length = 0

    while (current) {
      current = current.next
      length++
    }

    return length
  }
}

const list = new LinkedList();
list.push('start')
list.push('medium')
list.push('end')
module.exports = LinkedList