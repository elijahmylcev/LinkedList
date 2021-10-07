const Node = require('./LinkedListNode')

class LinkedList {
  constructor() {
    this.root = null
  }

  appendInTheBeginning(newNode) {
    if (!this.root) return this.root = newNode;
    const node = new Node(newNode.value, this.root)
    this.root = node
    return this;
  }

  push(newNode) {
    if (!this.root) return this.appendInTheBeginning(newNode)

    let current = this.root
     while (current.next) {
       current = current.next
     }
     current.next = newNode
    return this
  }

  insert(newNode, index = this.length - 1) {
    if (!this.root) return this.push(newNode)
    if (index === this.length - 1) return this.push(newNode);
    if (index === 0) return this.appendInTheBeginning(newNode);
    const prev = this.get(index - 1)
    const selected = this.get(index)
    prev.next = newNode
    newNode.next = selected
    return this
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
    if (!this.root) return null;
    let arr = []
    let current = this.root
    
    while (current.next) {
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
