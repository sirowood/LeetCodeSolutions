// https://leetcode.com/problems/integer-to-roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';
  Object.entries(map).forEach(([letter, n]) => {
    const count = Math.floor(num / n);
    result += letter.repeat(count);
    num %= n;
  });

  return result;
};
