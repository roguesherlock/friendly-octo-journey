const Queue = require('../Queue.js');

describe('Queue', () => {
    describe('remove', () => {
        it('should remove the value from the top of the queue', () => {
            let queue = new Queue();
            queue.add(23);
            queue.add(43);

            let value = queue.remove();
            expect(value).toBe(23);
        });

        it('should remove the value from the queue', () => {
            let queue = new Queue();
            queue.add('hello');
            queue.add('world');
            queue.remove();
            expect(queue.peek()).toBe('world');
        });
    });

    describe('add', () => {
        it('should add values to the top of the queue', () => {
            let queue = new Queue();
            queue.add('hello');
            queue.add('world');
            expect(queue.peek()).toBe('hello');
        });

        it('should fail silently on null or undefined values', () => {
            let queue = new Queue();
            queue.add(undefined);
            queue.add(null);
            queue.add();
            expect(queue.isEmpty).toBe(true);
        });
    });

    describe('peek', () => {
        it('should return the top of the queue', () => {
            let queue = new Queue();
            queue.add(2);
            expect(queue.peek()).toBe(2);
        });

        it('should not remove the top of the queue', () => {
            let queue = new Queue();
            queue.add(2);
            expect(queue.peek()).toBe(2);
            /* it shouldn't have removed the value */
            expect(queue.isEmpty).toBe(false);
        });

        it('should return null if queue is empty', () => {
            let queue = new Queue();
            expect(queue.peek()).toBe(null);
        });
    });

    describe('isEmpty', () => {
        it('should return true if queue is empty', () => {
            let queue = new Queue();
            expect(queue.isEmpty).toBe(true);
        });

        it('should return false if queue is not empty', () => {
            let queue = new Queue();

            queue.add('yay!');
            expect(queue.isEmpty).toBe(false);

            queue.remove();
            expect(queue.isEmpty).toBe(true);
        });
    });
});
