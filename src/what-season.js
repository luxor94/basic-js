const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let d = data.getMonth() + 1;  
  let a = new Date(2150, 12, 21, 18, 36, 41, 841)
  if (d == null) {
    return null;
  } else {

  if (d < 3) {
    return 'winter';
    }
    if  (d < 6) {
    return 'spring';
    }
    if (d < 9) {
    return 'summer';
    }
    if (d < 11) {
    return 'autumn';
    }
    if ( d = 12) {
    return 'winter';
    }
  }
};
