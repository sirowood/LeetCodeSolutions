// https://leetcode.com/problems/candy

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Each child has at least 1 candy
  // Iterate from the left, compare to each items's left,
  // if ratings[left neighbor] < ratings[item], then give 1 more candy than its left neighbor.
  // After the first loop, it ensures each item has more candies than its left neighbor if its rating is higher than its left neighbor.
  // Then iterate from the right, compare to each item's right following the same logic.
  // Afther the second iteration, it ensures each item has more candies than its neighbors if it has higher ratings.

  let candies = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    const currentRating = ratings[i];
    const leftRating = ratings[i - 1];

    if (currentRating > leftRating) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    const currentRating = ratings[i];
    const rightRating = ratings[i + 1];

    if (currentRating > rightRating) {
      candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
    }
  }

  return candies.reduce((total, next) => total + next, 0);
};
