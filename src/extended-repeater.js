const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, option) {
  let opt = {
    repeatTimes: option.repeatTimes || 1,
    separator: option.separator || '+',
    addition: option.addition,
    additionRepeatTimes: option.additionRepeatTimes || 1,
    additionSeparator: option.additionSeparator || '|'
  };
  if (opt.addition === null) {
    opt.addition = 'null'
  }
  let add = [];
  for (let i = 0; i < opt.additionRepeatTimes; i++) {
    add.push(opt.addition);
  }
  let addStr = add.join(opt.additionSeparator); //Добавочная строка
  let arr = []; //главный массив c добавочной строкой
  for (let i = 0; i < opt.repeatTimes; i++) {
    arr.push(str + addStr);
  }
  return arr.join(opt.separator);
}
module.exports = {
  repeater
};
