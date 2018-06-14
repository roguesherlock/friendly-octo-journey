/**
 *  Craking the Coding Interview:
 *
 *  1.2 Check Permutation: Given two strings,write a method to
 *  decide if one is a permutation of the other.
 *  Hints: #7, #84, #722, #737
 */
/**
 * checkPermutation:
 * @param {string} str1 - string 1
 * @param {string} str2 - string 2
 * @return {boolean}
 * @description - checks if str1 is permutation of str2
 */
function checkPermutation(str1, str2) {
    chars = new Map();

    if (str1.length != str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; ++i) {
        if (chars.has(str1[i])) {
            chars.set(str1[i], chars.get(str1[i]) + 1);
        } else {
            chars.set(str1[i], 1);
        }
    }

    for (let i = 0; i < str2.length; ++i) {
        if (!chars.has(str2[i])) {
            return false;
        }
        chars.set(str2[i], chars.get(str2[i]) - 1);
        if (chars.get(str2[i]) == 0) {
            chars.delete(str2[i]);
        }
    }
    return true;
}

let str1 = 'asdf';
let str2 = 'dfas';
console.log(checkPermutation(str1, str2));
