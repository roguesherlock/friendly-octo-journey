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
 * @param {List} list linked list
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
    let currPtr = list.head;
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

let list = new List([2, 3, 5, 6, 8, 2343, 'hewrwe']);

console.log(list.print());
console.log(`2 from last: ${findFromLast(list, 2)}`);
console.log(`5 from last: ${findFromLast(list, 5)}`);
console.log(`${list.length} from last: ${findFromLast(list, list.length)}`);
console.log(`1 from last: ${findFromLast(list, 1)}`);
console.log(`0 from last: ${findFromLast(list, 0)}`);
console.log(`${list.length + 1} from last ${findFromLast(list, list.length + 1)}`);
