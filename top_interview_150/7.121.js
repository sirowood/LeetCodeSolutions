// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Variation of Kadane's Algorithm
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      continue;
    }

    if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }

  return profit;
};

const prices = [6, 2, 1, 9];
console.log(maxProfit(prices));
