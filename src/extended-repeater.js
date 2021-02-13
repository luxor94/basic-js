const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = str;
  let separators = options.separator
  let additions = options.addition
  let additionRepeatTime = options.additionRepeatTimes
  let additionSeparators = options.additionSeparator

  if (separators == null) {
    separators = '+'
  } else {
    separators
  }
  if (additions == null) {
    newStr = str +''
    additions = ''
  } else {
    newStr = str + additions
  }

  let newAddition = additions

  if (additionSeparators == null) {
    additionSeparators = '|'
  } else {
    additionSeparators = additions + additionSeparators
  }

  

  for (let i = 0; i < additionRepeatTime-1; i++) {
    newAddition += `${additionSeparators}${newAddition}`
  }


  
      for(let i = 0; i < options.repeatTimes-1; i++) {
      newStr += `${separators}${str}${newAddition}`
      
    }
    return newStr
    

};
  