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
  console.log(str)
  let count;
  newStr = '';
  if (str === '') { return '' }
  for (let i = 0; i < str.length; i++) {
      count = 1;
      for (let j = i + 1; j < str.length + 1; j++) {
          if (str[i] != str[j]) {
              i = j - 1;
              if (count == 1) { count = '' }
              newStr += count + str[i]
              break
          }
          count++
          i = j - 1;
      }
  }
  return newStr
}

module.exports = {
  encodeLine
};
