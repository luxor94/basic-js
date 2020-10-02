const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 // throw new CustomError('Not implemented');
 
 if (Array.isArray(members) !== true) {
    return false;
    } else { 
    
    let result = members.filter(members => typeof members == 'string');

    let arr = result.join(',').replace(/[ ]/gi,"").replace(/[0-9]/gi,"").toUpperCase().split(',').sort();
    return arr.map(item => item[0]).join('');
    
}
};
