const Node = require('./Node');
const node = new Node();

const test_string = 'Hello'

describe('Node:', () => {
    test('should point to some data', () => {
        node(test_string)
        expect(node.value).toBeTruthy();
        expect(node.value).toEqual('Hello');
    });

    test('should a pointer to the next node in the list', () => {
        expect(node.next).toBeDefined();
    });
});

describe('Node.toString():', () => {
    test('should return a value in a string', () => {
        expect(node(test_string).toString()).toEqual('value: Hello, next: null');
    })
});
