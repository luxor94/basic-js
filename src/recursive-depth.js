const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let b = arr.map(x => Array.isArray(x))
    let sum = 1
          if (b.includes(true)) {
            let arr2 = arr.reduce((done,curr) => done.concat(curr), []);
              return sum + this.calculateDepth(arr2)
            } else {
              return sum;
            }
          }
        }