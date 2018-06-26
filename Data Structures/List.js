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
        this.value = value;
        this.next = next || null;
    }
};

/**
 * List: List object is the Linked List utility
 */
class List {
    /**
     *Creates an instance of List.
     * @param {Array} initialList
     * @memberof List
     */
    constructor(initialList) {
        this.head = null;
        this.tail = null;
        this.listLength = 0;

        if (initialList && initialList instanceof Array) {
            initialList.forEach((value) => {
                this.add(value);
            });
        }
    }

    /**
     * @readonly
     * @memberof List
     * @description length of list
     */
    get length() {
        return this.listLength;
    }

    /**
     * add
     * @param {*} value any value you want to store
     * @description add value to the end of list
     */
    add(value) {
        if (value == undefined || value == null) {
            return; // fail silently
        }

        let node = new Node(value);
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
        /*
         * make head point to our new element if it points to
         * nothing
         */
        if (this.head == null) {
            this.head = this.tail;
        }
        this.listLength++;
    }

    /**
     * push
     * @param {*} value any value you want to store
     * @description push value to the end of list
     */
    push(value) {
        this.add(value);
    }

    /**
     * insert
     * @param {*} value any value you want to store
     * @param {Number} index index at where you want to insert
     * @description insert value at the given index
     */
    insert(value, index) {
        if (value == undefined || value == null) {
            return; // fail silently
        }
        /*
         * Just add at the end of list if index has invalid values.
         * Note: Ideally should support insert at negative indexing
         * I'll add later on.
         */
        if (index == undefined || index == null ||
            index < 0 || index >= this.length) {
            this.add(value);
            return;
        }

        /* insert at the start. it works currently */
        if (index == 0) {
            let node = new Node(value, this.head);
            this.head = node;
            this.listLength++;
            return;
        }

        let currPtr = this.head;
        let count = 0;

        /*
         * because we need the node before where we want to
         * insert
         */
        index--;
        while (count < index) {
            count++;
            currPtr = currPtr.next;
        }

        /* should never reach here, ignoring for now. */
        if (currPtr == null) {
            this.add(value);
            return;
        }

        let node = new Node(value, currPtr.next);
        currPtr.next = node;
        this.listLength++;
    }

    /**
     * get
     * @param {Number} index
     * @return {*} value at the given index
     * @memberof List
     * @description get value at given index
     */
    get(index) {
        if (index < 0) {
            throw new Error('Currently List does not support negative Indexing. Sorry!');
        }

        if (index >= this.length) {
            if (this.length == 0) {
                throw new Error('Empty List');
            }
            throw new Error('Index out of bounds');
        }

        if (this.length == 0) {
            throw new Error('Empty List');
        }

        let currPtr = this.head;
        let count = 0;

        while (currPtr != null && count != index) {
            count++;
            currPtr = currPtr.next;
        }

        if (currPtr == null) {
            return new Error('Something\'s really wrong.');
        }
        return currPtr.value;
    }

    /**
     * remove
     * @param {*} value value you want to remove from list
     * @description remove the value (if found) from the list
     */
    remove(value) {
        if (value == undefined || value == null) {
            return; // fail silently
        }

        let currPtr = this.head;
        let prevPtr = this.head;
        while (currPtr != null && currPtr.value != value) {
            prevPtr = currPtr;
            currPtr = currPtr.next;
        }
        if (currPtr && currPtr.value == value) {
            prevPtr.next = currPtr.next;
            delete currPtr.value;
            delete currPtr.next;
            this.listLength--;
        }
    }

    /**
     * print
     * @description print the list
     */
    print() {
        let ptr = this.head;
        let list = '[ ';
        while (ptr != null) {
            list += ptr.value;
            list += ptr.next != null ? ', ': '';
            ptr = ptr.next;
        }
        list += ' ]';
        console.log(list);
    }
};

module.exports = List;
