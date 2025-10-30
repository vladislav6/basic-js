const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const baseSeparator = options.separator ? options.separator : '+';
  const addition = options.addition || options.addition === false || options.addition === null ? options.addition : '';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

  const additionStr = addition + additionSeparator;
  const additionRepeated = additionStr.repeat(additionRepeatTimes);
  const additionSliceLength = additionRepeated.length - additionSeparator.length;
  const repeatStr = str + additionRepeated.slice(0, additionSliceLength) + baseSeparator;
  const result = repeatStr.repeat(repeatTimes);
  const baseSliceLength = result.length - baseSeparator.length;
  return result.slice(0, baseSliceLength);
}

module.exports = {
  repeater
};
