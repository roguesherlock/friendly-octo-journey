const Stack = require('../Stack.js');

describe('Stack', () => {
    describe('pop', () => {
        it('should pop the value from the top of the stack', () => {
            let stack = new Stack();
            stack.push(23);
            stack.push(43);

            let value = stack.pop();
            expect(value).toBe(43);
        });

        it('should remove the value from the tack', () => {
            let stack = new Stack();
            stack.push('hello');
            stack.push('world');
            stack.pop();
            expect(stack.peek()).toBe('hello');
        });
    });

    describe('push', () => {
        it('should push values to the top of the stack', () => {
            let stack = new Stack();
            stack.push('hello');
            stack.push('world');
            expect(stack.peek()).toBe('world');
        });

        it('should fail silently on null or undefined values', () => {
            let stack = new Stack();
            stack.push(undefined);
            stack.push(null);
            stack.push();
            expect(stack.isEmpty).toBe(true);
        });
    });

    describe('peek', () => {
        it('should return the top of the stack', () => {
            let stack = new Stack();
            stack.push(2);
            expect(stack.peek()).toBe(2);
        });

        it('should not remove the top of the stack', () => {
            let stack = new Stack();
            stack.push(2);
            expect(stack.peek()).toBe(2);
            /* it shouldn't have removed the value */
            expect(stack.isEmpty).toBe(false);
        });

        it('should return null if stack is empty', () => {
            let stack = new Stack();
            expect(stack.peek()).toBe(null);
        });
    });

    describe('isEmpty', () => {
        it('should return true if stack is empty', () => {
            let stack = new Stack();
            expect(stack.isEmpty).toBe(true);
        });

        it('should return false if stack is not empty', () => {
            let stack = new Stack();

            stack.push('yay!');
            expect(stack.isEmpty).toBe(false);

            stack.pop();
            expect(stack.isEmpty).toBe(true);
        });
    });
});
