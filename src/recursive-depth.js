const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    for (i = 0; i < arr.length; i++) {
      let sum = 0
      if ( arr[i] == Object) {
        return sum += 1
      }
    }
  }
};