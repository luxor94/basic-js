const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (arr.some(item => 'object') === false) {
    
      return 1
    } else {
       arr.reduce(
       (result, element) => result.concat(element),
       []
     );
     let sum = 0+1
       return sum;
    };
   
  };
};