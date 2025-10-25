const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString();
  const numbers = [];
  const result = [];
  for (let i = 0; i < num.length; i += 1) {
    numbers.push(num.split(''));
  }
  for (let i = 0; i < num.length; i += 1) {
    for (let j = 0; j < num.length; j += 1) {
      if (i === j) {
        numbers[i][j] = '';
      }
    }
  }
  numbers.map((val)=>{
    result.push(val.join(''));
  });
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
