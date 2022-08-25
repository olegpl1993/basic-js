const { NotImplementedError } = require('../extensions/index.js');

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
  try {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (typeof (date.valueOf()) !== 'number') throw new Error("Invalid date!");
    let str = date.getMonth();
    if (str === 11 || str === 0 || str === 1) return 'winter';
    if (str === 2 || str === 3 || str === 4) return 'spring';
    if (str === 5 || str === 6 || str === 7) return 'summer';
    if (str === 8 || str === 9 || str === 10) return 'autumn';
  } catch {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
