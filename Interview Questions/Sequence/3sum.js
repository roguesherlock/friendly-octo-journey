/**
 *  Given an array nums of n integers, are there elements a, b, c
 *  in nums such that a + b + c = 0? Find all unique triplets in
 *  the array which gives the sum of zero.
 *
 *  Note:
 *
 *  The solution set must not contain duplicate triplets.
 *
 *  Example:
 *
 *  Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 *  A solution set is:
 *  [
 *    [-1, 0, 1],
 *    [-1, -1, 2]
 *  ]
 *
 *  url: https://leetcode.com/problems/3sum/description/
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
    let ans = [];

    for (i = 0; i < nums.length; ++i) {
        if (complements.has(nums[i])) {
            ans.push([i, complements.get(nums[i])]);
        } else {
            complements.set(target - nums[i], i);
        }
    }
    return ans;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    let foundSums = [];

    nums.forEach((p, i) => {
        let array = [...nums];
        array.splice(i, 1);
        let tsums = twoSum(array, -p);
        console.log(tsums);
        if (tsums.length > 0) {
            tsums.forEach((sums) => {
                sums.push(p);
                foundSums.push(sums);
            });
        }
    });

    return foundSums;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

