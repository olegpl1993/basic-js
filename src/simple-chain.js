const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  getLength() {
      return this.arr.length;
  },
  addLink(val = '') {
      this.arr.push(val);
      return chainMaker;
  },
  removeLink(n) {
      if (Number.isInteger(n) && n > 0 && n < this.arr.length) {
          this.arr.splice(n - 1, 1);
          return chainMaker;
      } else {
        this.arr = [];
          throw new Error("You can't remove incorrect link!");
      }
  },
  reverseChain() {
      this.arr.reverse();
      return chainMaker;
  },
  finishChain() {
      let str = '';
      for (let el of this.arr) {
          (str).length > 0 ? str += `~~( ${el} )` : str += `( ${el} )`;
      }
      this.arr = [];
      return str;
  }
};

module.exports = {
  chainMaker
};
