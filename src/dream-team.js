const { NotImplementedError } = require('../extensions/index.js');

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

let createDreamTeam=arr=>Array.isArray(arr)?(arr.filter(el=>typeof(el)==='string')).map(el=>el.split(' ').join('').toUpperCase()).sort().map(el=>el[0]).join(''):false;

module.exports = {
  createDreamTeam
};
