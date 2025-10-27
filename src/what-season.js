const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  const now = new Date();
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try{
    if (!date instanceof Date || date.getTime() === now.getTime()) {
      return 'Invalid date!';
    }
  } catch {
    return 'Invalid date!';
  }

  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  const month = date.getMonth();
  return seasons[month];
}

module.exports = {
  getSeason
};
