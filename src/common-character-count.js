const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let ind = 0;
  for (let i = 0; i < Math.max(s1.length, s2.length); i += 1) {
    if (s1.includes(s2[i])) {
      count += 1;
      ind = s1.indexOf(s2[i]);
      s1 = s1.replace(s1[ind], '');
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
