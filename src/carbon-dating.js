const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
//  throw new CustomError('Not implemented');
if (sampleActivity !== typeof(number)) {
  return false;
}
 let k = 0.693 / HALF_LIFE_PERIOD;
 t = 0.693 / k;
 return t * MODERN_ACTIVITY;
};

