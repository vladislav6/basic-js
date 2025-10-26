const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const names = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.map((val)=>{
    if (typeof val === 'string') {
      names.push(val.trim()[0].toString().toUpperCase());
    }
  });
  return names.sort().join('');
}

module.exports = {
  createDreamTeam
};
