const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;

  },
  addLink(value) {

  },
  removeLink(position) {
    this.chain.reverse()
    return this

  },
  reverseChain() {

  },
  finishChain() {

  }
};

module.exports = {
  chainMaker
};
