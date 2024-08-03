// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const length = strs.length;
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    const newLetter = strs[0][i];
    const matchCount = strs.filter((word) =>
      word.startsWith(result + newLetter)
    ).length;
    if (matchCount === length) {
      result += newLetter;
    }
  }

  return result;
};
