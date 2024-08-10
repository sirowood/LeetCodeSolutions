// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // trim
  const trimString = s.trim();

  // split
  const splitString = trimString.split(' ');

  // filter white space
  const filterArray = splitString.filter((item) => !!item);

  // reverse
  filterArray.reverse();

  // return
  return filterArray.join(' ');
};
