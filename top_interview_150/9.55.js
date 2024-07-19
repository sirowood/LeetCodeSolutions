// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let target = nums.length - 1;

  for (let pos = nums.length - 2; pos >= 0; pos--) {
    if (pos + nums[pos] >= target) {
      target = pos;
    }
  }

  return !target;
};

const nums = [2, 0, 1, 3, 1];
console.log(canJump(nums));
