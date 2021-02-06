const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('Error if arr is not an Array');
  if (arr.length == 0) return [];
      const a = arr.indexOf('--discard-next');
      const b = arr.indexOf('--discard-prev');
      const c = arr.indexOf('--double-next');
      const d = arr.indexOf('--double-prev')
      if (a !== -1) {
        if (a == 0) {
          return arr.slice(a+1);
        } 
        else if (a == arr.length-1) {
          return arr.slice(0,a)
        } else {
          return (arr.slice(0,a) + ',' + arr.slice(-a+2)).split(',')
        }
        
      }
      
      if (b !== -1) {
        if (b == 0) {
          return arr.slice(b+1);
        } else if (b == arr.length-1) {
          return arr.slice(0,b)
        } else {
          return (arr.slice(0,a-1) + ',' + arr.slice(-a+1)).split(',')
      }
    }

      if (c !== -1) {
        if (c == 0) {
          return arr.slice(c+1);
        } else if (c == arr.length-1) {
          return arr.slice(0,c)
        } else {
          return (arr.slice(0,c) + ',' + arr[c+1] + ',' + arr.slice(-c+1)).split(',')
        }
      }

      if (d !== -1) {
        if (d == 0) {
          return arr.slice(d+1);
        } else if (d == arr.length-1) {
          return arr.slice(0,d)
        } else {
          return (arr.slice(0,d) + ',' + arr[d-1] + ',' + arr.slice(-d+1)).split(',')
        }
        
      }
      return arr;
};
