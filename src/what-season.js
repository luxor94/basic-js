const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if (typeof data == "undefined") {
    return 'Unable to determine the time of year!';
  } else {
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

  }

};
