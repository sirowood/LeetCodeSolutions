// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = dict[s[i]];
    const next = dict[s[i + 1]];

    current < next ? (result -= current) : (result += current);
  }
  return result;
};
