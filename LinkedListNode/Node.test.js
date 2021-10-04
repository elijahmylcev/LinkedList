const Node = require('./Node');
const test_string = 'Hello'
let node = new Node();


describe('Node:', () => {

    beforeEach(() => {
        node = new Node(test_string)
    });

    test('should point to some data', () => {
        expect(node.value).toBeTruthy();
        expect(node.value).toEqual('Hello');
    });

    test('should a pointer to the next node in the list', () => {
        expect(node.next).toBeDefined();
    });
});

describe('Node.toString():', () => {
    beforeEach(() => {
        node = new Node(test_string)
    });

    test('should return a value in a string', () => {
        expect(node.toString()).toEqual('value: Hello, next: null');
    })
});
