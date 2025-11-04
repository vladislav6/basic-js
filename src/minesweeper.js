const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  const line = [];
  const checkmatrix = [];
   matrix.map(v => {
    checkmatrix.push(v.every((val) => val === false));
  });
  matrix.map(v => {
    if (checkmatrix.every(item => item === true)) {
      line.length = v.length;
      line.fill(0)
      result.push(line);
    } else {
      for (let i = 0; i < matrix.length; i += 1 ) {
        for (let j = 0; j < matrix.length; j += 1) {
          if (matrix[i][j] === true) {
            matrix[i][j] = 1;
            matrix[i][j + 1] =  1;
            matrix[i + 1][j] = 1;
            if (matrix[i - 1] &&  matrix[i][j - 1]) {
              matrix[i - 1][j] += 1;
              matrix[i][j - 1] += 1;
            }
          } else if (matrix[i][j] === false) {
            matrix[i][j] = 1;
          }
        }
      }
      result = matrix;
    }
  });
  return result;
}

module.exports = {
  minesweeper
};
