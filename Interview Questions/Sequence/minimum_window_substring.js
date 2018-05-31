/*
 *
 *  Given a string S and a string T, find the minimum window in S which will
 *  containall the characters in T in complexity O(n).
 *
 *  Example:
 *
 *  Input: S = "ADOBECODEBANC", T = "ABC"
 *  Output: "BANC"
 *  Note:
 *
 *  If there is no such window in S that covers all characters in T, return
 *  the empty string "".
 *  If there is such window, you are guaranteed that there will always be
 *  only one unique minimum window in S.
 *
 *  url: https://leetcode.com/problems/minimum-window-substring/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function(s, t) {
    let i;
    let j;
    let found;
    let foundChars;
    let minWin;
    let minWinList = [];

    for (i = 0; i <= (s.length - t.length); ++i) {
        if (t.indexOf(s[i]) != -1) {
            found = false;
            foundChars = '';
            minWin = '';
            for (j = i; j < s.length; ++j) {
                minWin += s[j];
                if (t.indexOf(s[j]) != -1 && foundChars.indexOf(s[j]) == -1) {
                    foundChars += s[j];
                }
                if (foundChars.length == t.length) {
                    found = true;
                    break;
                }
            }
            if (found) {
                minWinList.push(minWin);
            }
        }
    }
    if (minWinList.length > 0) {
        return minWinList.reduce((acc, curr) => acc.length < curr.length ? acc : curr);
    } else {
        return '';
    }
};

let s = 'ADOBECODEBANC';
let t = 'ABC';

console.log(minWindow(s, t));
