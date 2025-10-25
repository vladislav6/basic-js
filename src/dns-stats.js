const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  if (domains.length < 1) {
    return {};
  }
  const dnsArr = domains.length > 1 ? [[domains[0].split('.')[domains.length - 1]]] : [[domains[0].split('.')[domains.length]]];
  const result = {};
  const sortArr = [];
  let sortResult = {};
  
  function countMatch(arr, match) {
    let count = 0;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i].includes(match[match.length - 1])) {
        count += 1;
      }
    }
    return count;
  }

  for (let i = 0; i < domains.length; i += 1) {
    dnsArr.push(domains[i].split('.').reverse());
  }

  for (let i = 0; i < dnsArr.length; i += 1) {
    result['.' + dnsArr[i].join('.')] = countMatch(dnsArr, dnsArr[i]);
  }
  
  for (let val in result) {
    sortArr.push([val, result[val]]);
  }

  sortArr.sort((a, b) => b[1] - a[1]);

  sortResult = Object.fromEntries(sortArr);

  return sortResult;
}

module.exports = {
  getDNSStats
};
