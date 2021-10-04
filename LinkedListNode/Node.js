class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `value: ${this.value}, next: ${this.next}`
    }
}

module.exports = Node;
