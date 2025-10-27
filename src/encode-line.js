const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.includes(str[i])) {
      count += 1;
      if (str[i] !== str[i + 1]) {
        result = `${result}${count === 1 ? '' : count}${str[i]}`;
        count = 0;
      }
    }
  }
  return result; 
}

module.exports = {
  encodeLine
};
