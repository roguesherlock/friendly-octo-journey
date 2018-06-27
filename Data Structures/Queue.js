/**
 * Queue
 * @author akash
 * @description this is a very naive implementation
 * of Queue
 */

/**
 * @class Node
 * @description Queue node to be used in queue implementation
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
 * @class Queue
 * @description a very naive implementation of a Queue
 */
class Queue {
    /**
     *Creates an instance of Queue.
     * @memberof Queue
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * remove
     * @return {*} item
     * @memberof Queue
     */
    remove() {
        if (this.head == null) {
            return null;
        }
        let item = this.head.item;
        this.head = this.head.next;
        this.size--;
        return item;
    }

    /**
     *
     * add
     * @param {*} item
     * @memberof Queue
     */
    add(item) {
        if (item == null || item == undefined) {
            return; // fail silently
        }
        let node = new Node(item);
        this.tail == null ? this.tail = node : this.tail.next = node;
        this.tail = node;
        this.size++;
        if (this.head == null) {
            this.head = this.tail;
        }
    }

    /**
     *
     * peek
     * @return {*} item
     * @memberof Queue
     */
    peek() {
        if (this.head == null) {
            return null;
        }
        let item = this.head.item;
        return item;
    }

    /**
     *
     *
     * @readonly
     * @memberof Queue
     */
    get isEmpty() {
        return this.size == 0;
    }
}

module.exports = Queue;
