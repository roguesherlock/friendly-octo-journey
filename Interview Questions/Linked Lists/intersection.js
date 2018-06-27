/**
 *  Craking the Coding Interview:
 *
 *  [2.7] Intersection: Given two (singly) linked lists,
 *  determine if the two lists intersect. Return the inter­
 *  secting node. Note that the intersection is defined based
 *  on reference, not value.That is, if the kth node of the
 *  first linked list is the exact same node (by reference)
 *  as the jth node of the second linked list, then they are
 *  intersecting.
 *  Hints:#20, #45, #55, #65, #76, #93, #111, #120, #129
 *  Note: I'd use most of hints. Dammit gayle!
 */

const List = require('../../Data Structures/List.js');

/**
 * findIntersection
 * @param {List} list1 list 1
 * @param {List} list2 list 2
 * @return {Node} intersecting if two lists intersect
 * else null
 * @description find out if the two singly linked list
 * intersect (by reference) and return the intersecting node
 */
function findIntersection(list1, list2) {
    /*
     * if two linked list intersect at some point, they'll always have
     * the same tail
     */
    if (list1.tail != list2.tail) {
        return null;
    }
    /* this are stupid names. Need a better naming scheme */
    let head1 = list1.head;
    let head2 = list2.head;

    /*
     * move forward one of the list so as they become of equal length,
     * if not already
     */
    if (list1.length != list2.length) {
        if (list1.length > list2.length) {
            let diff = list1.length - list2.length;
            for (let i = 0; i < diff; ++i) {
                head1 = head1.next;
            }
        } else {
            let diff = list2.length - list1.length;
            for (let i = 0; i < diff; ++i) {
                head2 = head2.next;
            }
        }
    }
    /*
     * now loop through the list to find the first
     * intersecting node.
     * Note: at this point, we already know that they intersect,
     * so we're looking for that intersecting node
     */
    while (head1 != null && head2 != null) {
        if (head1 == head2) {
            return head1; // aha! found it!
        }
        head1 = head1.next;
        head2 = head2.next;
    }

    return null;
}

let list1 = new List([2, 3, 4]);
let list2 = new List([4, 5]);
list2.tail.next = list1.head;
list2.tail = list1.tail;
list2.listLength += list1.length;

list1.print();
list2.print();

let node = findIntersection(list1, list2);
console.assert(node != null);
node == null ? console.log('failed') : console.assert(node.value == 2);

list1 = new List([2, 3, 4]);
list2 = new List([7, 8]);

node = findIntersection(list1, list2);
console.assert(node == null);
node == null ? console.log('passed') : console.log('failed');
