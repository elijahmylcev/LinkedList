const LinkedList = require('../LinkedList');
const Node = require('../Node')

describe('push(Node), Node(value, next):', () => {
    let list
    beforeEach(() => {
        list = new LinkedList();
        node = new Node()
    });
    test('inserts an element at the end of the list', () => {
        list.push('vlaue-test')
        list.push('end-string')
        expect(list.tail.next).toBeNull();
    })
    test('should return boolean', () => {
        expect(list.push('element')).toBeTruthy();
    })
});

describe('insert(Node, index):', () => {
    let list
    beforeEach(() => {
        list = new LinkedList()
        list.push('el_1')
        list.push('el_2')
        list.push('el_3')
    })

    test('inserts element at index = length -1', () => {
        // list.insert('test_string')
        list.insert('test string');
        expect(list.toArray()[list.length - 1]).toEqual({value: 'test string', next: null});
    })
    test('insert element at index', () => {
        console.log(list.insert('test string', 1));
        expect(list.toArray()[1]).toStrictEqual(expect.objectContaining({value: 'test string', next: expect.any(Object)}))
    });
    test('should return boolean', () => {
        expect(list.insert('value-test', 1)).toBeTruthy();
    })
});

describe('get(index):', () => {
    let list
    beforeEach(() => {
        list = new LinkedList()
        list.push('el_1')
        list.push('el_2')
        list.push('el_3')
    })
    
    test('should return the element at the specified index', () => {
        expect(list.get(list.length - 1)).toEqual({
            value: 'el_3',
            next: null
        });
    })
    test('should return null if there is no element with an index', () => {
        expect(list.get(7)).toBeNull();
    })
});

describe('length:', () => {
    let list
    beforeEach(() => {
        list = new LinkedList()
        list.push('el_0')
        list.push('el_1')
        list.push('el_2')
    })
    test('getter, returns the actual length of the list', () => {
        expect(list.length).toBe(3);
    })
});
