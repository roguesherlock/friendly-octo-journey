/**
 *  Craking the Coding Interview:
 *
 *  [2.4] Partition: Write code to partition a linked list
 *  around a value x, such that all nodes less than x come
 *  before all nodes greater than or equal to x. If x is
 *  contained within the list, the values of x only need
 *  to be after the elements less than x (see below).
 *  The partition element x can appear anywhere in the
 *  "right partition"; it does not need to appear between
 *  the left and right partitions.
 *  EXAMPLE
 *  Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
 *  Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 *  Hints: #3, #24
 *  Note: I'd to see the solution as the above example was
 *  confusing
 */

const List = require('../../Data Structures/List.js');

/**
 * partition:
 * @param {List} list linked list
 * @param {*} value value to partition around
 * @description partition the linked list around the
 * given value 'value' such that elements with values
 * less than given value come before the elements with
 * values greater than given value
 */
function partition(list, value) {
    let beforeStart;
    let beforeEnd;
    let afterStart;
    let afterEnd;
    let currPtr = list.head;

    while (currPtr != null) {
        let next = currPtr.next;
        currPtr.next = null;
        /* insert at the head */
        if (currPtr.value < value) {
            if (beforeStart == undefined) {
                beforeStart = currPtr;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = currPtr;
                beforeEnd = currPtr;
            }
        } else {
            /* insert at tail */
            if (afterStart == undefined) {
                afterStart = currPtr;
                afterEnd = afterStart;
            } else {
                afterEnd.next = currPtr;
                afterEnd = currPtr;
            }
        }
        currPtr = next;
    }

    if (beforeStart == undefined) {
        list.head = afterStart;
    } else {
        beforeEnd.next = afterStart;
        list.head = beforeStart;
    }
}

let list = new List([2, 5, 7, 10, 1, 0]);

list.print();
partition(list, 5);
list.print();
