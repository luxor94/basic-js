const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let arr = backyard.flat(); 
  const result = arr.filter(arr => arr == '^^');
  return result.length;
};
