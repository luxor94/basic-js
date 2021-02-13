const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(` ( ${value} ) `);
    return chain;
  },
  removeLink(position) {
    return chain;
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    return chain;
  }
};

module.exports = chainMaker;
