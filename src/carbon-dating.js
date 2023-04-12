const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let ageResult; 
  let nuMsampleActivity = Number(sampleActivity);
  ageResult = ((typeof (sampleActivity) === 'string') && (nuMsampleActivity > 0)
  && (nuMsampleActivity < 15))?(Math.ceil(Math.log(MODERN_ACTIVITY / nuMsampleActivity) / (0.693 / HALF_LIFE_PERIOD))):(false)

    return ageResult
}


module.exports = {
  dateSample
};
