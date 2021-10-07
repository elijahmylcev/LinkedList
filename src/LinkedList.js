const Node = require('./LinkedListNode')

class LinkedList {
  constructor() {
    this.root = null
  }

  push(newNode) {
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root
     while (current.next) {
       current = current.next
     }
     current.next = newNode
    return this
  }

  insert(newNode, index = this.length - 1) {

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
    if (!this.root) return null
    if (index > this.length || index < 0) return null
    let current = this.root
    let step = 0

    while (step < index) {
      current = current.next
      step++
    }

    return current
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
    if(!this.root) return 0
    let current = this.root
    let length = 1

    while (current.next) {
      current = current.next
      length ++
    }

    return length
  }
}

module.exports = LinkedList
