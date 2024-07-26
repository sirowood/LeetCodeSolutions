// https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Fast and slow pointers
  // Use for-loop to check the fast item, if the fast item !== val, replace it with the slow item, and increase slow pointer, because the problem doesn't care about the order.
  // Then we can ensure the slow pointer always pointing to the most right valid item position

  let slowPointer = 0;

  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== val) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer++;
    }
  }

  return slowPointer;
};
