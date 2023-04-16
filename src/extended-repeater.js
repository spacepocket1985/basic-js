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

function repeater(str, options) {



  str = String(str);


  (typeof options.addition == "boolean" ||  options.addition === null) ? (options.addition = String(options.addition)) : ('');

  (!options.addition) ? (options.addition = '') : (options.addition = String(options.addition));


  (!options.separator) ? (options.separator = '+') : (options.separator = String(options.separator));

  (!options.additionSeparator) ? (options.additionSeparator = '|') : options.additionSeparator = String(options.additionSeparator);

  (!options.repeatTimes) ? (options.repeatTimes = 1) : (options.repeatTimes = Number(options.repeatTimes));

  (!options.additionRepeatTimes) ? (options.additionRepeatTimes = 1) : (options.additionRepeatTimes = Number(options.additionRepeatTimes));


  strFirstPart = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes))
  strSecondPart = strFirstPart.slice(0, strFirstPart.length - options.additionSeparator.length)
  strThirdPart = (strSecondPart + options.separator).repeat(options.repeatTimes)
  resultStr = strThirdPart.slice(0, strThirdPart.length - options.separator.length)



  console.log('strFirstPart = ' + strFirstPart)
  console.log('strSecondPart = ' + strSecondPart)
  console.log('strThirdPart = ' + strThirdPart)
  console.log('resultStr = ' + resultStr)
  return resultStr
}


module.exports = {
  repeater
};
