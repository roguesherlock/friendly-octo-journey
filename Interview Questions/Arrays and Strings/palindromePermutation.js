/**
 *  Craking the Coding Interview:
 *
 *  [1.4] Palindrome Permutation: Given a string, write a function to check if
 *  it is a permutation of a palindrome. A palindrome is a word or phrase that
 *  is the same forwards and backwards. A permutation is a rearrangement of
 *  letters. The palindrome doesn't need to be limited to just dictionary words.
 *  EXAMPLE
 *  Input: Tact Coa
 *  Output: True (permutations: "taco cat", "atco eta", etc.)
 * Hints: #106, #121, #134, #136
 */
/**
 * isPermutationOfPalindrome:
 * @param {string} phrase
 * @return {boolean}
 * @description - checks if the given phrase
 * is permutation of palindrome
 */
function isPermutationOfPalindrome(phrase) {
    /* we'll just check if the given string can be
     * a palindrome or not. One of the ways to check
     * that is to see if it has even number of characters.
     * We can only allow at most 1 odd number of character
     */
    /* assuming ascii characters. */
    let chars = new Array(26).fill(0);
    let oddCount = 0;

    /* we'll do case insensitive search */
    phrase = phrase.toUpperCase();
    for (let i = 0; i < phrase.length; ++i) {
        if (phrase[i] < 'A' ||
            phrase[i] > 'Z') {
            continue;
        }
        let charIndex = phrase.charCodeAt(i);
        chars[charIndex]++;
        if (chars[charIndex] % 2 == 1) {
            oddCount++;
        } else {
            oddCount--;
        }
    }
    return oddCount <= 1;
}

let phrase = 'Tact Coa';

console.log(isPermutationOfPalindrome(phrase));
