const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return names;
  }
  let result = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let elem1 = names[0];
  let elem2 = names[1];
  let elem3 = names[2];
  let elem4 = names[3];
  let elem5 = names[4];

  if (elem1 === elem2) {
    count1 += 1;
    elem2 = elem2 + `(${count1})`;
  }
  if (elem1 === elem3) {
    count1 += 1;
    elem3 = elem3 + `(${count1})`;
  } 
  if (elem1 === elem4) {
    count1 += 1;
    elem4 = elem4 + `(${count1})`;
  }
  if (elem1 === elem5) {
    count1 += 1;
    elem5 = elem5 + `(${count1})`;
  }

  if (elem2 === elem1) {
    count2 += 1;
    elem1 = elem1 + `(${count2})`;
  }
  if (elem2 === elem3) {
    count2 += 1;
    elem3 = elem3 + `(${count2})`;
  } 
  if (elem2 === elem4) {
    count2 += 1;
    elem4 = elem4 + `(${count2})`;
  }
  if (elem2 === elem5) {
    count2 += 1;
    elem5 = elem5 + `(${count2})`;
  }

  if (elem3 === elem1) {
    count3 += 1;
    elem1 = elem1 + `(${count3})`;
  }
  if (elem3 === elem2) {
    count3 += 1;
    elem3 = elem3 + `(${count3})`;
  } 
  if (elem3 === elem4) {
    count3 += 1;
    elem4 = elem4 + `(${count3})`;
  }
  if (elem3 === elem5) {
    count3 += 1;
    elem5 = elem5 + `(${count3})`;
  }

  if (elem4 === elem1) {
    count4 += 1;
    elem1 = elem1 + `(${count4})`;
  }
  if (elem4 === elem2) {
    count4 += 1;
    elem3 = elem3 + `(${count4})`;
  } 
  if (elem4 === elem3) {
    count4 += 1;
    elem4 = elem4 + `(${count4})`;
  }
  if (elem4 === elem5) {
    count4 += 1;
    elem5 = elem5 + `(${count4})`;
  }

  if (elem5 === elem1) {
    count5 += 1;
    elem1 = elem1 + `(${count5})`;
  }
  if (elem5 === elem2) {
    count5 += 1;
    elem3 = elem3 + `(${count5})`;
  } 
  if (elem5 === elem3) {
    count5 += 1;
    elem4 = elem4 + `(${count5})`;
  }
  if (elem5 === elem4) {
    count5 += 1;
    elem5 = elem5 + `(${count5})`;
  }

  result = [elem1, elem2, elem3, elem4, elem5];
  return result;
}

module.exports = {
  renameFiles
};
