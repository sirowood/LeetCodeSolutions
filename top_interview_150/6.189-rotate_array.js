// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // My solution
  // if nums.length = 5, k = 7,
  // it is the same as k = 2,
  // so actually only need to rotate k % nums.length times,
  // then the actualK is always smaller than nums.length.
  // Move the first nums.length - k items to the end, or move the last k items to the beginning
  const actualK = k % nums.length;

  if (actualK === 0) {
    return;
  }

  const endItems = nums.splice(0, nums.length - actualK);

  nums.push(...endItems);

  /*
  // Another solution
  // Array.splice(-x) will remove the last x items from the original array
  // Array.unshift(another) will insert another item into the original array
  nums.unshift(...nums.splice(-actualK));
  */
};
