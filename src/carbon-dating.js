const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ( typeof sampleActivity === 'string') {
    const number = Number(sampleActivity);
    if (number && number > 0) {
      const age = Math.log(15 / number) / (Math.LN2 / 5730);
      return Math.ceil(age) >= 0 && Math.ceil(age);
    } 
  }
  return false;
}

module.exports = {
  dateSample
};
