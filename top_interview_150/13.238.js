// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Each item = leftProduct * leftProduct
  // First iterate from the left, after this iteration, each item = leftProduct,
  // Then iterate from the right, after this iteration, each item = leftProduct * rightProduct

  const output = [];
  let leftProduct = 1;
  let rightProduct = 1;

  // First iteration
  for (let i = 1; i <= nums.length; i++) {
    output.push(leftProduct);
    leftProduct *= nums[i - 1];
  }

  // Second iteration
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
};
