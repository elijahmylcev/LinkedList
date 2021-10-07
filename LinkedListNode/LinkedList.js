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

  insert(value = null, index = this.length - 1) {
    const newNode = new Node(value)

    let arr = this.toArray()
    const arr_1 = arr.slice(0, index)
    const arr_2 = arr.slice(index)
    arr_1.push(newNode)
    arr_1[arr_1.length -1].next = arr_2[0]
    const out = arr_1.concat(arr_2)

    return out
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

module.exports = LinkedList
