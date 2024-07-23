// https://leetcode.com/problems/h-index

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length;
  let count = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= i) {
      count++;
    }
  }

  return count;
};
