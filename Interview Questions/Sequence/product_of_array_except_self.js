/**
 *  Given an array nums of n integers where n > 1,  return an array output
 *  such that output[i] is equal to the product of all the elements of nums
 *  except nums[i].
 *
 *  Example:
 *
 *  Input:  [1,2,3,4]
 *  Output: [24,12,8,6]
 *  Note: Please solve it without division and in O(n).
 *
 *  Follow up:
 *  Could you solve it with constant space complexity? (The output array
 *  does not count as extra space for the purpose of space complexity analysis.)
 *
 *  url: https://leetcode.com/problems/product-of-array-except-self/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    let productOfAllExceptSelf = [];
    let foundZeros = 0;

    let productOfAll = nums.reduce((accumulator, num, i) => {
        if (num == 0 && foundZeros < 1) {
            foundZeros++;
            return accumulator;
        } else {
            return accumulator * num;
        }
    });

    nums.forEach((p) => {
        if (foundZeros) {
            if (p == 0) {
                productOfAllExceptSelf.push(productOfAll);
            } else {
                productOfAllExceptSelf.push(0);
            }
        } else {
            productOfAllExceptSelf.push(productOfAll / p);
        }
    });

    return productOfAllExceptSelf;
};

let nums = [1, 2, 3, 4];
let nums2 = [0, 0];
let nums3 = [1, 2, 3, 0];
console.log(productExceptSelf(nums));
console.log(productExceptSelf(nums2));
console.log(productExceptSelf(nums3));
