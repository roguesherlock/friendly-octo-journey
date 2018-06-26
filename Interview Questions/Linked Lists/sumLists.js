/**
 *  Craking the Coding Interview:
 *
 *  [2.5] Sum Lists: You have two numbers represented by a linked list,
 *  where each node contains a single digit.The digits are stored in
 *  reverse order, such that the 1 's digit is at the head of the list.
 *  Write a function that adds the two numbers and returns the sum as a
 *  linked list.
 *  EXAMPLE
 *  Input:(7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
 *  Output: 2 -> 1 -> 9. That is, 912.
 *  FOLLOW UP
 *  Suppose the digits are stored in forward order. Repeat the above problem.
 *  EXAMPLE
 *  Input:(6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
 *  Output: 9 -> 1 -> 2. That is, 912.
 *  Hints: #7, #30, #71, #95, #109
 */

const List = require('../../Data Structures/List.js');

/**
 * sumLists
 * @param {List} a list representing a number
 * @param {List} b list representing a number
 * @return {List} list representing sum of a and b
 * @description return a sum to two numbers represented by a
 * linked list where each contains a single digit. the digits are
 * stored in reverse order.
 */
function sumLists(a, b) {
    let ans = new List();
    let listAPtr = a.head;
    let listBPtr = b.head;
    let carry = 0;

    while (listAPtr != null || listBPtr != null) {
        let n;
        if (listAPtr != null && listBPtr != null) {
            n = listAPtr.value + listBPtr.value;
            listAPtr = listAPtr.next;
            listBPtr = listBPtr.next;
        } else if (listAPtr != null) {
            n = listAPtr.value;
            listAPtr = listAPtr.next;
        } else if (listBPtr != null) {
            n = listBPtr.value;
            listBPtr = listBPtr.next;
        } else {
            n = 0;
        }

        if (carry) {
            n += carry;
            carry--;
        }

        if (n >= 10) {
            n = n % 10;
            carry++;
        }
        ans.add(n);
    }

    return ans;
}

let a = new List([7, 1]);
let b = new List([5, 9, 2]);

console.log('a: 17, b: 295, sum: 312');
a.print();
b.print();

let sum = sumLists(a, b);
sum.print();

console.log('---');

a = new List([7, 1, 6]);
b = new List([5, 9, 2]);

console.log('a: 617, b: 295, sum: 912');
a.print();
b.print();

sum = sumLists(a, b);
sum.print();

console.log('---');

a = new List([7, 1, 6]);
b = new List([9, 2]);

console.log('a: 617, b: 29, sum: 646');
a.print();
b.print();

sum = sumLists(a, b);
sum.print();
