const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  str = n + "";
  let pos;
  
  for (let i=0; i< str.length; i++) { 
      if (str[i]<str[i+1]) {
          pos = i;
          break
      }
  }
  return Number(str.substring(-1, pos) + str.substring(pos+1, str.length))
 
}
//npm run test ./test/transform-array.test
module.exports = {
  deleteDigit
};
