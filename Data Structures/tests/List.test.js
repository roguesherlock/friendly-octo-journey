const List = require('../List.js');

describe('List', () => {
    describe('constructor', () => {
        it('should instantiate list with all elements', () => {
            let list = new List([2, 3, 4]);
            expect(list.length).toBe(3);
        });
    });

    describe('length', () => {
        it('should return the correct length', () => {
            let list = new List([2, 3, 4]);
            expect(list.length).toBe(3);

            list.remove(2);
            expect(list.length).toBe(2);

            list.add(5);
            expect(list.length).toBe(3);
        });
    });

    describe('get', () => {
        it('should return the correct value at the given index', () => {
            let list = new List([2, 3, 4]);
            expect(list.get(1)).toBe(3);
        });

        it('should throw error on Empty List', () => {
            let list = new List();
            let caught = false;
            try {
                list.get(0);
            } catch (e) {
                caught = true;
                expect(e.message).toBe('Empty List');
            }
            expect(caught).toBe(true);
        });


        it('should throw error on negative index', () => {
            let list = new List([2, 3, 4]);
            let caught = false;
            try {
                list.get(-1);
            } catch (e) {
                caught = true;
                expect(e.message).toBe('Currently List does not ' +
                                'support negative Indexing. Sorry!');
            }
            expect(caught).toBe(true);
        });

        it('should throw error on index out of bounds', () => {
            let list = new List([2, 3, 4]);
            let caught = false;
            try {
                list.get(list.length + 10);
            } catch (e) {
                caught = true;
                expect(e.message).toBe('Index out of bounds');
            }
            expect(caught).toBe(true);
        });
    });

    describe('add', () => {
        it('should add item to the end of list', () => {
            let list = new List();
            list.add(5);
            list.add(2);
            expect(list.length).toBe(2);
            expect(list.get(0)).toBe(5);
            expect(list.get(1)).toBe(2);
        });

        it('should add any value to the end of list', () => {
            let list = new List();
            let str = 'I am string, if you handn\'t realized';
            let fn = () => console.log('I\'m a function');
            list.add(0);
            list.add(str);
            list.add(fn);

            expect(list.length).toBe(3);
            expect(list.get(0)).toBe(0);
            expect(list.get(1)).toBe(str);
            expect(list.get(2)).toBe(fn);
        });

        it('should fail silently for null or undefined values', () => {
            let list = new List();
            list.add(undefined);
            list.add(2);
            list.add(null);

            expect(list.length).toBe(1);
            expect(list.get(0)).toBe(2);
        });
    });

    describe('push', () => {
        it('should push item to the end of list', () => {
            let list = new List();
            list.push(5);
            list.push(2);
            expect(list.length).toBe(2);
            expect(list.get(0)).toBe(5);
            expect(list.get(1)).toBe(2);
        });

        it('should push any value to the end of list', () => {
            let list = new List();
            let str = 'I am string, if you handn\'t realized';
            let fn = () => console.log('I\'m a function');
            list.push(0);
            list.push(str);
            list.push(fn);

            expect(list.length).toBe(3);
            expect(list.get(0)).toBe(0);
            expect(list.get(1)).toBe(str);
            expect(list.get(2)).toBe(fn);
        });

        it('should fail silently for null or undefined values', () => {
            let list = new List();
            list.push(undefined);
            list.push(2);
            list.push(null);

            expect(list.length).toBe(1);
            expect(list.get(0)).toBe(2);
        });
    });

    describe('insert', () => {
        it('should fail silently on undefined or null values', () => {
            let list = new List();
            list.insert(undefined);
            list.insert(2, 0);
            list.insert(null);

            expect(list.length).toBe(1);
            expect(list.get(0)).toBe(2);
        });

        it('should add at the end if index greater than length of list', () => {
            let list = new List();
            list.insert(5);
            list.insert(2, 23);
            expect(list.length).toBe(2);
            expect(list.get(1)).toBe(2);
        });

        it('should add at then end if negative index', () => {
            let list = new List();
            list.insert(5);
            list.insert(2, -1);
            expect(list.length).toBe(2);
            expect(list.get(1)).toBe(2);
        });

        it('should add at the end if index is undefined', () => {
            let list = new List();
            list.insert(5);
            list.insert(2);
            expect(list.length).toBe(2);
            expect(list.get(1)).toBe(2);
        });

        it('should add at the end if index is null', () => {
            let list = new List();
            list.insert(5);
            list.insert(2, null);
            expect(list.length).toBe(2);
            expect(list.get(1)).toBe(2);
        });

        it('should insert at the specified index', () => {
            let list = new List([2, 3, 4, 5, 6]);
            list.insert(8, 2);

            expect(list.length).toBe(6);
            expect(list.get(2)).toBe(8);
        });

        it('should insert at the start', () => {
            let list = new List([2, 3, 4, 5, 6]);
            list.insert(8, 0);

            expect(list.length).toBe(6);
            expect(list.get(0)).toBe(8);
        });

        it('should insert at the end', () => {
            let list = new List([2, 3, 4, 5, 6]);
            let end = list.length - 1;
            /* list are zero indexed */
            list.insert(8, end);

            expect(list.length).toBe(6);
            expect(list.get(end)).toBe(8);
        });
    });

    describe('remove', () => {
        it('should remove the specified value from list', () => {
            let list = new List([2, 3, 4]);
            list.remove(3);

            expect(list.length).toBe(2);
            expect(list.get(1)).toBe(4);
        });

        it('should fail silently if value not found', () => {
            let list = new List([2, 3, 4]);
            list.remove(5);

            expect(list.length).toBe(3);
        });

        it('should fail siltently on null or undefined value', () => {
            let list = new List([2, 3, 4]);
            list.remove();
            list.remove(null);

            expect(list.length).toBe(3);
        });
    });
});
