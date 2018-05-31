/*
 *  Given an array of integers, return indices of the two numbers such that they
 *  add up to a specific target.
 *
 *  You may assume that each input would have exactly one solution, and you may
 *  not use the same element twice.
 *
 *  Example:
 *
 *  Given nums = [2, 7, 11, 15], target = 9,
 *
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 *
 *  url: https://leetcode.com/problems/two-sum/description/
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    /*  complements in a sense that, say we've x + y = target;
     *  then, x = target - y;
     */
    let i;
    let complements = new Map();

    for (i = 0; i < nums.length; ++i) {
        if (complements.has(nums[i])) {
            return [i, complements.get(nums[i])];
        } else {
            complements.set(target - nums[i], i);
        }
    }
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
