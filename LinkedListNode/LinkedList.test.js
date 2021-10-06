const LinkedList = require('./LinkedList');
let list = new LinkedList();

describe('push(Node), Node(value, next):', () => {
    beforeEach(() => {
        node = new Node()
    });
    test('inserts an element at the end of the list', () => {
        list.push('vlaue-test')
        list.push('end-string')
        expect(list[list.length - 1].next).toBeNull();
    })
    test('should return boolean', () => {
        expect(list.push('element') === Boolean).toBeTruthy();
    })
});

describe('insert(Node, index):', () => {

    beforeEach(() => {
        list.push('el_1')
        list.push('el_2')
        list.push('el_3')
    })

    test('inserts element at index', () => {
        list.insert('el_test_index=3', 1)
        expect(list[1] === {value: 'el_test_index=3', next: Object}).toBeTruthy();
    })
    test('should return boolean', () => {
        expect(list.insert('value-test', 1) === Boolean).toBeTruthy();
    })
});

describe('get(index):', () => {

    beforeEach(() => {
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
        expect(list.get(5)).toBeNull();
    })
});

describe('length:', () => {
    test('getter, returns the actual length of the list', () => {
        list.push('el_0')
        list.push('el_1')
        list.push('el_2')
        expect(list.length).toBe(3);
    })
});
