/**
 *  Craking the Coding Interview:
 *
 *  [1.9] String Rotation:Assume you have a method isSubstring
 *  which checks if one word is a substring of another.
 *  Given two strings, sl and s2, write code to check if s2 is
 *  a rotation of sl using only one call to isSubstring
 *  (e.g.,"waterbottle" is a rotation of"erbottlewat").
 *  Hints:#34,#88, #104
 *  Note: I seriously had to use all hints. dammit gayle!
 */

/**
 * isRotation
 * @param {string} str1 string 1
 * @param {string} str2 string 2
 * @return {boolean} is str2 rotation of str1
 * @description check if str2 is rotation of str1
 */
function isRotation(str1, str2) {
    /* like if we divided str1 into x & y parts,
     * such that say str2 is the rotation yx,
     * then xyxy (i.e. str1 + str1) will include,
     * str2 if it's the rotation of str1.
     * Makes sense? check ctci.
     */
    return (str1 + str1).includes(str2);
}

let str1 = 'waterbottle';
let str2 = 'erbottlewat';
console.log(isRotation(str1, str2));

str1 = 'waterbottle';
str2 = 'bottleerwat';
console.log(isRotation(str1, str2));
