const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //let a = arr.indexOf('--discard-next', 0);
  // if (a == -1) {
  //  return arr
  //  } else { arr.splice(a, a-1) 
 //   };
    let b = arr.indexOf('--discard-prev', 0);
    if (b == -1) {
      arr
      } else if ( b == 0 ) {
        arr.shift()
        } else { arr.splice(b-1, b-1)
      };
      let c = arr.indexOf('--double-next', 0);
      if (c == -1) {
    return arr
    } else {
     arr.splice(c, c-2, arr[c+1])
    };
let d = arr.indexOf('--double-prev', 0);
   if (d == -1) {
    return arr
    } else if ( d == 0 ) {
      arr.shift()
    } else {
    arr.splice(d, d-2, arr[d-1])
    };
  return arr;
};
