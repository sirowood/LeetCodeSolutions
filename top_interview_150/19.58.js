// https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sArray = s.trim().split(' ');
  const lastWord = sArray[sArray.length - 1];

  return lastWord.length;
};
