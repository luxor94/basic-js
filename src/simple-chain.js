const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.checkNum(position)) {
      if (position < 1 || position > this.getLength()) {
        this.delChain();
        throw new Error('throws an Error on removing wrong link');
      }
      const ind = position - 1;
      this.chain.splice(ind,1);
      return this;
    }
    this.delChain();
    throw new Error('throws an Error on removing wrong link');
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.getChain();
    this.delChain()
    return finishChain;
  },

  delChain() {
    this.chain.length = 0;

  },  
  
  checkNum() {
    return typeof num == 'number' && (num ^ 0) == num;
  },

  getChain() {
    return this.chain.join('~~')
  }

};

module.exports = chainMaker;
