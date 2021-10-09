const Node = require('../Node');
const testString = 'Hello'

describe('Node:', () => {

  let node = new Node();

  beforeEach(() => {
    node = new Node(testString)
  });

  test('should point to some data', () => {
    expect(node.value).toBeDefined();
    expect(node.value).toEqual('Hello');
  });

  test('should a pointer to the next node in the list', () => {
    expect(node.next).toBeNull();
    node.next = { value: 1 };
    expect(node.next.value).toBe(1);
  });
});

describe('Node.toString():', () => {
  beforeEach(() => {
    node = new Node(testString)
  });

  test('should return a value in a string', () => {
    expect(node.toString()).toEqual('value: Hello, next: null');
  })
});
