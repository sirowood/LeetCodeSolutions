// https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // My solution
  const threshold = nums.length / 2;
  const memo = {};

  for (let num of nums) {
    memo[num] = (memo[num] || 0) + 1;

    if (memo[num] > threshold) {
      return num;
    }
  }

  // Boyer-Moore Voting Algorithm for O(1) space and O(n) time
  /* 
  let candidate = null;
  let count = 0;

  for (let item of nums) {
    if (count === 0) {
      candidate = item;
    }

    count += item === candidate ? 1 : -1;
  }

  return candidate;
  */
};
