const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  if (!data) return 'Unable to determine the time of year!';

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if (data instanceof Date) {
    if (Object.prototype.toString.call(data) !== '[object Date]') throw new Error('Caught fake date!')



    let d = data.getMonth() + 1;
    if (d < 3) {
    return 'winter';
    }
    if  (d < 6) {
    return 'spring';
    }
    if (d < 9) {
    return 'summer';
    }
    if (d < 12) {
    return /autumn|fall/;
    }
    if ( d = 12) {
    return 'winter';
    }
    
  
  return 'Unable to determine the time of year!';
}
throw new Error('Unable to determine the time of year!');
}