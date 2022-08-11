const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
  let arr = [];
  for (let el of mail) {
    arr.push(el);
    if (el === '@') {
      arr = [];
    }
  }
  return arr.join('')
}

module.exports = {
  getEmailDomain
};
