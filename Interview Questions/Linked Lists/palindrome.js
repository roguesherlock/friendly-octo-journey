/**
 *  Craking the Coding Interview:
 *
 *  [2.6] Palindrome: Implement a function to check if
 *  a linked list is a palindrome.
 *  Hints:#5, #13, #29, #61, #101
 *  Note: I'd to use two hints. Dammit gayle!
 */

const List = require('../../Data Structures/List.js');

/**
 * isPalindrome
 * @param {List} list list to check
 * @return {boolean} is the list palindrome
 * @description checks weather the given linked list
 * is palindrome
 */
function isPalindrome(list) {
    if (list == null || list == undefined || !list instanceof List) {
        return;
    }
    let head = list.head;
    let isOdd = list.length % 2 == 0 ? false : true;
    let stack = [];

    for (let i = 0; i < Math.floor(list.length / 2); ++i) {
        stack.push(head.value);
        head = head.next;
    }

    if (isOdd) {
        head = head.next;
    }
    for (let i = 0; i < Math.floor(list.length / 2); ++i) {
        if (stack.pop() != head.value) {
            return false;
        }
        head = head.next;
    }

    return true;
}

let list = new List(['a', 'b', 'c', 'c', 'b', 'a']);
list.print();
let check = isPalindrome(list);
console.log(`is Palindrome?: ${check}`);
console.assert(check);

console.log('----');
list = new List(['a', 'b', 'c', 'b', 'a']);
list.print();
check = isPalindrome(list);
console.log(`is Palindrome?: ${check}`);
console.assert(check);

console.log('----');
list = new List(['a', 'b', 'd', 'a']);
list.print();
check = isPalindrome(list);
console.log(`is Palindrome?: ${check}`);
console.assert(!check);
