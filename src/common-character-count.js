const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(so1, so2) {
  let s1 = so1.split('');
  let s2 = so2.split('');
  let acum = 0;
  for (let e1 in s1) {
    for (let e2 in s2) {
      if (s1[e1] === s2[e2]) {
        s2[e2] = "*";
        acum++;
        break;
      }
    }
  }
  return acum;
}

module.exports = {
  getCommonCharacterCount
};
