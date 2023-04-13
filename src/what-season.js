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
function getSeason(yourDate) {
 
  if (!yourDate) return 'Unable to determine the time of year!';
  if (!(yourDate instanceof Date) || Object.getOwnPropertyNames(yourDate)[0]) {
    throw new Error('Invalid date!');
  }
  let result = yourDate.getMonth();
  if (result>=0 && result <2 || result == 11) {return 'winter' }
  if (result>=2 && result <5 ) {return 'spring'}
  if (result>=5 && result <8 ) {return 'summer' }
  if (result>=8 && result <11 ) {return 'fall'}
}

module.exports = {
  getSeason
};
