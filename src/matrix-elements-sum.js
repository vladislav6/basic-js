const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  
  let result = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    result = result + matrix[0][i];
  }

  for (let i = 1; i <= matrix.length; i += 1) {
    matrix[i - 1].map((val, ind) => {
      if (matrix[i-1][ind] !== 0) {
          if (i !== matrix.length) {
            console.log(matrix[i][ind])
            result = result + matrix[i][ind];
          }
        }
    });
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
