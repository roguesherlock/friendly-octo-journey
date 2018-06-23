/**
 *  Craking the Coding Interview:
 *
 *  [2.2] Return Kth to Last: Implement an algorithm to find
 *  the kth to last element of a singly linked list.
 *  Hints:#8, #25, #41, #67, #126
 */

const List = require('../../Data Structures/List.js');

/**
 * findFromLast
 * @param {List.List} list linked list
 * @param {Number} k kth element from last
 * @return {*} kth element from the last
 * @description find and return the kth element from
 * last.
 * Note: A better approach would be to use another pointer, tail,
 * to keep track of tail of the list. This is me just slacking!
 */
function findFromLast(list, k) {
    if (k > list.length) {
        return null;
    }
    let currPtr = list.head.next;
    let count = 1;
    const breakCount = list.length - k + 1;

    while (currPtr != null) {
        if (count == breakCount) {
            return currPtr.value;
        }
        currPtr = currPtr.next;
        count++;
    }
}

let list = new List.List();
list.add(2);
list.add(3);
list.add(5);
list.add(6);
list.add(8);
list.add(2343);
list.add('hewrwe');

console.log(list.print());
console.log(findFromLast(list, 2));
console.log(findFromLast(list, 5));
console.log(findFromLast(list, list.length));
console.log(findFromLast(list, 1));
console.log(findFromLast(list, 0));
console.log(findFromLast(list, list.length + 1));
