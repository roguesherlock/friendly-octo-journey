/**
 *  Craking the Coding Interview:
 *
 *  [2.3] Delete Middle Node: Implement an algorithm to delete
 *  a node in the middle (i.e., any node but the first and last
 *  node, not necessarily the exact middle) of a singly linked
 *  list, given only access to that node.
 *  EXAMPLE
 *  Input: the node c from the linked list a->b->c->d->e->f
 *  Result: nothing is returned, but the new linked list looks
 *  like a->b->d->e->f
 *  Hints:#72
 *  Note: had to use the hint. Dammit gayle!
 */

const List = require('../../Data Structures/List.js');

/**
 * deleteMiddleNode:
 * @param {object} node node to remove from list
 * @description remove the middle node from the list, given
 * only that node
 */
function deleteMiddleNode(node) {
    let ptr = node.next;

    /**
     * what we're doing here basically is copying the next node
     * to the given node and deleting the next node.
     * So, essentially we're removing middle node.
     */
    node.value = ptr.value;
    node.next = ptr.next;

    delete ptr.value;
    delete ptr.next;
}

let list = new List.List();
list.add(2);
list.add(3);
list.add(5);
list.add(6);

list.print();
/**
 * remove 5
 * Note: the list adds at the front
 */
deleteMiddleNode(list.head.next.next);
list.print();
