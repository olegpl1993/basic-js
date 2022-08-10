const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let newArr = []
  for (let elem of arr) {
    if (elem !== newArr[newArr.length - 1]) {
      newArr.push(1);
      newArr.push(elem);
    } else {
      newArr[newArr.length - 2] += 1;
    }
  }
  return newArr.filter(elem => elem !== 1).join('');
}

module.exports = {
  encodeLine
};
