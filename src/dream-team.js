const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 // throw new CustomError('Not implemented');
 let arr = members.join(',').replace(/[ ]/gi,"").replace(/[0-9]/gi,"").split(',');
 let arr2 = arr.map(item => item[0]);
 return arr2.sort().join('').toUpperCase();
 //return arr;

};
