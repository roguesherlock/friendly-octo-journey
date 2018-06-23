/**
 * List
 * @author akash
 * @description this very premature module
 * exposes some of the functionality to create as well as
 * perform some operations on a Linked List
 */

 /**
  * Node: Node object represents the node in a linked list
  */
class Node {
    /**
     *Creates an instance of Node.
     * @param {*} value value to add to list
     * @param {*} next ptr to next node
     * @memberof Node
     */
    constructor(value, next) {
        this.value = value ||undefined;
        this.next = next || null;
    }
};

/**
 * List: List object is the Linked List utility
 */
class List {
    /**
     *Creates an instance of List.
     * @memberof List
     */
    constructor() {
        this.head = new Node();
    }

    /**
     * add
     * @param {*} value any value you want to store
     * @param {*} afterValue if provided, store value
     * in the the list after afterValue
     * @description add value to either head of list or
     * after afterValue. If afterValue not found in list,
     * add at the front.
     */
    add(value, afterValue) {
        let ptr = this.head;
        if (afterValue) {
            while (ptr.next != null && ptr.value != afterValue) {
                ptr = ptr.next;
            }
        }
        let node = new Node(value, ptr.next);
        ptr.next = node;
    }

    /**
     * remove
     * @param {*} value any value you want to store
     * @description remove the value (if found) from the list
     */
    remove(value) {
        let currPtr = this.head;
        let prevPtr = this.head;
        while (currPtr != null || currPtr.value != value) {
            prevPtr = currPtr;
            currPtr = currPtr.next;
        }
        if (currPtr && currPtr.value == value) {
            prevPtr.next = currPtr.next;
            delete currPtr.value;
            delete currPtr.next;
        }
    }

    /**
     * print
     * @description print the list
     */
    print() {
        let ptr = this.head.next;

        console.log('[');
        while (ptr != null) {
            console.log('  ' + ptr.value + ',');
            ptr = ptr.next;
        }
        console.log(']');
    }
};

exports.List = List;
