const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  let sum;

  let getNumbersCount = (number) => {
    sum = 0;
    strTemp = '' + number;
    for (let i = 0; i < strTemp.length; i++) {
      sum += Number(strTemp[i])
    }
    return Number(sum)
  }
  while (n >= 10) {
    n = getNumbersCount(n)
  }
  return n
}

module.exports = {
  getSumOfDigits
};
