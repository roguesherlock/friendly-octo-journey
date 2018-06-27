/**
 *  Craking the Coding Interview:
 *
 *  [2.8] Loop Detection: Given a circular linked list,
 *  implement an algorithm that returns the node at the
 *  beginning of the loop.
 *  DEFINITION
 *  Circular linked list: A (corrupt) linked list in which
 *  a node's next pointer points to an earlier node, so as
 *  to make a loop in the linked list.
 *  EXAMPLE
 *  Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
 *  Output: C
 *  Hints: #50, #69, #83, #90
 *  Note: I'd see the solution for this. Dammit gayle!
 */

const List = require('../../Data Structures/List.js');

/**
 * detectLoop
 * @param {List} list list to detect
 * @return {Node} node at the begining of the loop
 * if it's a loop, else null
 * @description given a circular linked list, find the node
 * that returns the node at the beginning of the loop.
 */
function detectLoop(list) {
    let ptr = list.head;
    /* fastPtr is twice as fast as slowPtr */
    let slowPtr = list.head;
    let fastPtr = list.head;
    let isLoop = false;
    let count = 1;

    while (ptr != null) {
        ptr = ptr.next;
        fastPtr = fastPtr.next;
        if (count % 2 == 0) {
            slowPtr = slowPtr.next;
            /* we only want to check when we move slow ptr */
            if (fastPtr == slowPtr) {
                /*
                 * at this point fastPtr will be at k steps before
                 * the start of the loop, where k is the size of
                 * non looped part of the list. see ctci: pg 223
                 * for more info
                 */
                isLoop = true;
                break;
            }
        }
        count++;
    }
    if (isLoop) {
        /*
         * we can also say that head will be k steps before the start
         * of the loop. see ctci: pg 223 for more info
         * So we move forward head and fastptr until they collide,
         * which will be our start of the loop
         */
        ptr = list.head;
        while (ptr != fastPtr) {
            ptr = ptr.next;
            fastPtr = fastPtr.next;
        }
        return ptr;
    }

    return null;
}

list = new List(['A', 'B', 'C', 'D', 'E']);

// make it circular by pointing 'E's next to 'C'
list.tail.next = list.head.next.next;

let node = detectLoop(list);

console.assert(node != null);
if (node) {
    console.assert(node.value == 'C');
    console.log('passed');
} else {
    console.log('failed');
}
