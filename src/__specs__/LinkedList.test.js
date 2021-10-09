const LinkedList = require('../LinkedList');
const Node = require('../Node')

describe('push(Node), Node(value, next):', () => {

  let list;

  beforeEach(() => {
    list = new LinkedList();
    node = new Node();
  });

  test('inserts an element at the end of the list', () => {
    const el1 = new Node('value-test');
    list.push(el1);
    expect(list.get(0).value).toBe(el1.value);
    const el2 = new Node('end-string');
    list.push(el2);
    expect(list.get(1).value).toBe(el2.value);
  });

  test('should return boolean', () => {
    const el = new Node('element');
    const res = list.push(el);
    expect(res).toBeTruthy();
  });

});

describe('insert(Node, index):', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.push(new Node('el_1'));
    list.push(new Node('el_2'));
    list.push(new Node('el_3'));
  });

  test('inserts element at the last index', () => {
    list.insert(new Node('test string'));
    expect(list.get(list.length - 1).value).toBe('test string');
  });

  test('inserts element at the first index', () => {
    list.insert(new Node('test string'), 0);
    expect(list.get(0).value).toBe('test string');
  });

  test('insert element at on of middle index', () => {
    list.insert(new Node('test string'), 1);
    expect(list.get(1)).toStrictEqual(expect.objectContaining({ value: 'test string', next: expect.any(Object) }));
  });

  test('should return boolean', () => {
    const res = list.insert(new Node('value-test'), 1);
    expect(res).toBeTruthy();
  });
});

describe('get(index):', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.push(new Node('el_1'));
    list.push(new Node('el_2'));
    list.push(new Node('el_3'));
  });

  test('should return the element at the specified index', () => {
    expect(list.get(list.length - 1)).toEqual({
      value: 'el_3',
      next: null
    });
  });

  test('should return null if there is no element with an index', () => {
    expect(list.get(7)).toBeNull();
    expect(list.get(-2)).toBeNull();
  });

});

describe('length:', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.push(new Node('el_0'));
    list.push(new Node('el_1'));
    list.push(new Node('el_2'));
  });

  test('getter, returns the actual length of the list', () => {
    expect(list.length).toBe(3);
  })
});
