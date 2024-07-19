// https://leetcode.com/problems/jump-game-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let rightBoundary = 0;

    for (let i = left; i < right + 1; i++) {
      rightBoundary = Math.max(rightBoundary, i + nums[i]);
    }

    left = right + 1;
    right = rightBoundary;
    steps++;
  }

  return steps;
};
