const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(value, code) {
    value = value.toUpperCase();
    code = code.toUpperCase();
    code = code.repeat(Math.ceil(value.length/code.length))
    const enStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = [];
    let j = 0
    for(let i = 0; i < value.length; i++) {

      if (enStr.indexOf(value[i]) >= 0) {
        if (enStr.indexOf(value[i]) + enStr.indexOf(code[i-j]) < 26) {
          str.push(enStr.indexOf(value[i]) + enStr.indexOf(code[i-j]))
        }
        if (enStr.indexOf(value[i]) + enStr.indexOf(code[i-j]) >= 26) {
          str.push(enStr.indexOf(value[i]) + enStr.indexOf(code[i-j])-26)
        }
      } else {
        str.push(value[i])
        j++
        continue
      }
    }
    let result = []
    for (let i = 0; i < str.length; i++) {
      if (enStr.indexOf(value[i]) >= 0) {
        result.push(enStr[str[i]])
      } else {
        result.push(value[i])
      }
      
    }
    return result.join('')

  }    
  // decrypt() {

  // }
}

module.exports = VigenereCipheringMachine;
