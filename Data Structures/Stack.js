/**
 * Stack
 * @author akash
 * @description this is a very naive implementation
 * of Stack
 */

/**
 * @class Node
 * @description Stack node to be used in stack implementation
 */
class Node {
    /**
     *Creates an instance of Node.
     * @param {*} item item to add
     * @param {Node} next ptr to next node
     * @memberof Node
     */
    constructor(item, next) {
        this.item = item;
        this.next = next || null;
    }
}

/**
 *
 * @class Stack
 * @description a very naive implementation of a Stack
 */
class Stack {
    /**
     *Creates an instance of Stack.
     * @memberof Stack
     */
    constructor() {
        this.top = null;
        this.size = 0;
    }

    /**
     * pop
     * @return {*} item
     * @memberof Stack
     */
    pop() {
        if (this.top == null) {
            return null;
        }
        let item = this.top.item;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    /**
     *
     * push
     * @param {*} item
     * @memberof Stack
     */
    push(item) {
        if (item == null || item == undefined) {
            return; // fail silently
        }
        let node = new Node(item, this.top);
        this.top = node;
        this.size++;
    }

    /**
     *
     * peek
     * @return {*} item
     * @memberof Stack
     */
    peek() {
        if (this.top == null) {
            return null;
        }
        let item = this.top.item;
        return item;
    }

    /**
     *
     *
     * @readonly
     * @memberof Stack
     */
    get isEmpty() {
        return this.size == 0;
    }
}

module.exports = Stack;
