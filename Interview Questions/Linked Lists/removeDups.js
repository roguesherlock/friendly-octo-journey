/**
 *  Craking the Coding Interview:
 *
 *  [2.1] Remove Dups: Write code to remove duplicates from
 *  an unsorted linked list.
 *  Follow Up: How would you solve this problem if a temporary
 *  buffer is not allowed?
 *  Hints: #9, #40
 */

const List = require('../../Data Structures/List.js');

/**
 *
 * removeDups:
 * @param {object} head pointer to the head of list
 * @description remove duplicates from the unsorted linked list
 */
function removeDups(head) {
    let dupMap = new Map();
    let currPtr = head;
    let prevPtr = head;

    while (currPtr != null) {
        if (dupMap.has(currPtr.value)) {
            prevPtr.next = currPtr.next;
        } else {
            dupMap.set(currPtr.value, 1);
            prevPtr = currPtr;
        }
        currPtr = currPtr.next;
    }
}

let list = new List.List();
list.add(2);
list.add(3);
list.add(5);
list.add(2);
list.add(2);
list.add(5);
list.add(7);
list.add(3);

list.print();
removeDups(list.head);
list.print();
