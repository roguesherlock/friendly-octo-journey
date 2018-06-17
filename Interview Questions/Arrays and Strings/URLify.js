/**
 *  Craking the Coding Interview:
 *
 *  1.3 URLify : Write a method to replace all spaces in a string with '%20'
 *  You may assume that the string has sufcient space at the end to hold the
 *  additional characters,and that you are given the true length of the string.
 *  (Note: If implementing in Java,please use a character array so that you can
 *  perform this operation in place.)
 *  EXAMPLE
 *  Input: "Mr John Smith ", 13
 *  Output: "Mr%20John%20Smith"
 *  Hints: #53, #118
 */

/**
 * urlify:
 * @param {string} str - string
 * @param {number} len - length of string
 * @return {string}
 * @description - given a string, return the
 * URLified version of it. i.e. replace space
 * with '%20' for now.
 */
function urlify(str, len) {
    /* replace any non-word character by '%20' */
    return str.replace(/\W/g, '%20');
}

let str = 'Mr Robot';
let len = str.length;

console.log(urlify(str, len));
