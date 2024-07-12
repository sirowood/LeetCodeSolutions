// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // The challenge asks to:
  // 1. modify the original nums array
  // 2. return the k
  /* 
  The logic is use fast and slow pointers.
   */
  let slowPointer = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[slowPointer - 1]) {
      nums[slowPointer] = nums[i];
      slowPointer++;
    }
  }

  return slowPointer;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
