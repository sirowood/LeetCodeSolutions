// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return 2;
  }

  let slowPointer = 2;

  for (let fastPointer = 2; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== nums[slowPointer - 2]) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer++;
    }
  }

  return slowPointer;
};
