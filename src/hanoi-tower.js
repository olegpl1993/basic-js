const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 let calculateHanoi = (dn, ts) => ({turns : 2 ** dn - 1, seconds: Math.floor((2 ** dn - 1) / (ts / 60 / 60))})

module.exports = {
  calculateHanoi
};
