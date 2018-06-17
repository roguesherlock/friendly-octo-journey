/**
 *  Craking the Coding Interview:
 *
 *  [1.5] One Away: There are three types of edits that can be
 *  performed on strings: insert a character, remove a character,
 *  or replace a character. Given two strings, write a function to
 *  check if they are one edit (or zero edits) away.
 *  EXAMPLE
 *  pale, ple -> true
 *  pales, pale -> true
 *  pale, bale -> true
 *  pale, bake -> false
 *  Hints:#23, #97, #130
 */

/**
 * isOneEditAway:
 * @param {string} str1 - string 1
 * @param {string} str2 - string 2
 * @return {boolean}
 * @description - given string 1 & 2,
 * check if strings can me made equal
 * by performing only one edit (insert,
 * remove or replace)
 */
function isOneEditAway(str1, str2) {
    let editsRequired = 0;
    let len = str1.length >= str2.length ? str1.length : str2.length;
    let i;
    let j;

    if (str1.length - str2.length > 1) {
        return false;
    }

    for (i = 0, j = 0; i < len; i++, j++) {
        if (str1[i] == str2[j]) {
            continue;
        }
        if (++editsRequired > 1) {
            break;
        }
        if (str1.length > str2.length) {
            j--;
        } else if (str1.length < str2.length) {
            i--;
        }
    }
    return editsRequired <= 1;
}

let str1 = 'pale';
let str2 = 'ale';
console.log(isOneEditAway(str1, str2));

str1 = 'paes';
str2 = 'pales';
console.log(isOneEditAway(str1, str2));

str1 = 'pale';
str2 = 'bale';
console.log(isOneEditAway(str1, str2));

str1 = 'pale';
str2 = 'bake';
console.log(isOneEditAway(str1, str2));
