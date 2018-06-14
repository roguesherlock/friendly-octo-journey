/**
 *  Craking the Coding Interview:
 *
 *  1.1 Is Unique: Implement an algorithm to determine if a string has
 *  all unique characters.
 *  What if you cannot use additional data structures?
 *
 *  Hints: #44, #7 7 7, #732
 */

/**
 * checks if the string has all the unique
 * characters or not.
 * @param {string} str - string to check
 * @return {boolean}
 */
function isUnique(str) {
    let chars = new Map();
    for (let i = 0; i < str.length; ++i) {
        if (chars.has(str[i])) {
            return false;
        } else {
            chars.set(str[i], 1);
        }
    }
    return true;
}

let str = 'abcdef';
let str1 = 'ababab';

console.log(isUnique(str));
console.log(isUnique(str1));
