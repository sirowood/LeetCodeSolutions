// https://leetcode.com/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (leftPointer <= rightPointer) {
    if (leftMax <= rightMax) {
      if (height[leftPointer] >= leftMax) {
        leftMax = height[leftPointer];
      } else {
        total += leftMax - height[leftPointer];
      }

      leftPointer++;
    } else {
      if (height[rightPointer] >= rightMax) {
        rightMax = height[rightPointer];
      } else {
        total += rightMax - height[rightPointer];
      }

      rightPointer--;
    }
  }

  return total;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
