const { NotImplementedError } = require('../extensions/index.js');

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
let getDNSStats = (dom, arr = [], obj = {}) => {
  for (let el of dom) { arr.push(...el.split('.')) }
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    let temp = `.${arr[i]}`, temp2 = `.${arr[0]}.${arr[i]}`, temp3 = `.${arr[0]}.${arr[1]}.${arr[i]}`;
    if (obj[temp]) { obj[temp] += 1 }
    else if (obj[temp2]) { obj[temp2] += 1 }
    else if (obj[temp3]) { obj[temp3] += 1 }
    else {
      if (i === 0) { obj[temp] = 1 }
      else if (i === 1) { obj[temp2] = 1 }
      else { obj[temp3] = 1 }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
