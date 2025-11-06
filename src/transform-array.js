const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let curItem = 0;
  let nextItem = 0;
  let prevItem = 0;
  let result = arr;
  sliceOne = [];
  sliceTwo = [];

  function doubNext(a) {
    if (a.includes('--double-next')) {
      curItem = a.indexOf('--double-next');
      if (curItem !== -1) {
        nextItem = a[curItem + 1];
        if (nextItem) {
          sliceOne = a.slice(0, curItem);
          sliceTwo = a.slice(curItem + 1);
          result = [...sliceOne, nextItem, ...sliceTwo];
        } else {
          result = a.slice(0, curItem);
        }
      }
    }
    return result;
  }

  function disPrev(a) {
    if (a.includes('--discard-prev')) {
      curItem = a.indexOf('--discard-prev');
      if (curItem !== -1) {
        prevItem = a[curItem - 1];
        if (prevItem || prevItem === '') {
          sliceOne = a.slice(0, curItem - 1);
          sliceTwo = a.slice(curItem + 1);
          result = [...sliceOne, '',...sliceTwo];
        } else {
          result = a.slice(1);
        }
      }
    }
    return result;
  }
  
 function doubPrev(a) {
    if (a.includes('--double-prev')) {
      curItem = a.indexOf('--double-prev');
      if (curItem !== -1) {
        prevItem = a[curItem - 1];
        if (prevItem || prevItem === '') {
          sliceOne = a.slice(0, curItem);
          sliceTwo = a.slice(curItem + 1);
          result = [...sliceOne, prevItem, ...sliceTwo];
        } else {
          result = a.slice(1);
        }
      }
    }
    return result;
  }

  function disNext(a) {
    if (a.includes('--discard-next')) {
      curItem = a.indexOf('--discard-next');
      if (curItem !== -1) {
        nextItem = a[curItem + 1];
        if (nextItem) {
          sliceOne = a.slice(0, curItem);
          sliceTwo = a.slice(curItem + 2);
          result = [...sliceOne, '',...sliceTwo];
        } else {
          result = a.slice(0, curItem);
        }
      }
    }
    return result;
  }

    if (!Array.isArray(result)) {
      return "'arr' parameter must be an instance of the Array!";
    } else {
      result.forEach((val) => {
        if (Array.isArray(val)) {
          result = val;
          for (let i = 0; i < result.length; i += 1) {
            switch (result[i]) {
              case '--double-next': doubNext(result); i = 0;
                break;
              case '--discard-prev': disPrev(result); i = 0;
                break;
              case '--discard-next': disNext(result); i = 0;
                break;
              case '--double-prev': doubPrev(result); i = 0;
                break;
            }
          }
        }
      });
    }

    for (let i = 0; i < result.length; i += 1) {
      switch (result[i]) {
        case '--double-next': doubNext(result); i = 0;
          break;
        case '--discard-prev': disPrev(result); i = 0;
          break;
        case '--discard-next': disNext(result); i = 0;
          break;
        case '--double-prev': doubPrev(result); i = 0;
          break;
      }
    }

    if (result.includes('')) {
      for (let i = 0; i < result.length; i += 1) {
        if (result[i] === '') {
          curItem = result.indexOf('');
          if (curItem !== -1) {
            sliceOne = result.slice(0, curItem);
            sliceTwo = result.slice(curItem + 1);
          }
        }
        result = [...sliceOne, ...sliceTwo];
      } 
    }

  return result;
}
module.exports = {
  transform
};
