/**
 *  Craking the Coding Interview:
 *
 *  [1.6] String Compression: Implement a method to perform
 *  basic string compression using the counts of repeated characters.
 *  For example, the string aabcccccaaa would become a2blc5a3. If the
 *  "compressed" string would not become smaller than the original
 *  string, your method should return the original string.
 *  You can assume the string has only uppercase and lowercase
 *  letters (a - z).
 *  Hints:#92, #110
 *  Note: ctci has a better designed algorithm
 */

 /**
  * compressString:
  * @param {string} str - string to be compressed
  * @return {string} - compressed string
  * @description - try to compress the string
  * by repacing the repeated letters with it's
  * repeated count
  */
function compressString(str) {
    let compressedString = '';
    let count;
    for (let i = 0; i < str.length; ++i) {
        if (i != str.length - 1 &&
            str[i] == str[i + 1]) {
            count = 1;
            while (i != str.length &&
                    str[i] == str[i + 1]) {
                count++;
                i++;
            }
            compressedString += str[i] + count;
        } else {
            compressedString += str[i];
        }
    }
    if (compressedString.length == str.length) {
        return str;
    }
    return compressedString;
}

let str = 'aabcccccaaa';
console.log(compressString(str));
console.assert(compressString(str) == 'a2bc5a3',
                'your algorithm doesn\'t work buddy');

str = 'abcd';
console.log(compressString(str));
console.assert(compressString(str) == 'abcd',
                'your algorithm doesn\'t work buddy');

str = 'aaabbbdddfffgggw';
console.log(compressString(str));
console.assert(compressString(str) == 'a3b3d3f3g3w',
                'your algorithm doesn\'t work buddy');
