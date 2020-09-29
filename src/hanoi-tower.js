const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
    let turn = ((2 ** disksNumber) - 1);
    let seconds = turn / ((turnsSpeed/3600))

  return {turns : turn, seconds : Math.floor(seconds)};

};

