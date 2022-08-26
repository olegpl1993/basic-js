const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(txt, key) {
    if (!txt || !key) throw new Error('Incorrect arguments!');
    txt = txt.toUpperCase();
    key = key.toUpperCase();
    let code = [], final = [];
    for (let i = 0, n = 0; i < txt.length; i++) {
      if (this.alphabet.includes(txt[i])) { code.push(this.alphabet.indexOf(key[n]) + this.alphabet.indexOf(txt[i])), n++ }
      else code.push(txt[i]);
      if (n >= key.length) { n = 0 };
    }
    for (let e = 0; e < code.length; e++) {
      if (typeof (code[e]) !== "number") final.push(code[e]);
      for (let i = 0, n = 0; i <= code[e]; i++, n++) {
        if (n >= 26) n = 0;
        if (i === code[e]) final.push(this.alphabet[n]);
      }
    }
    return !this.bool ? final.reverse().join('') : final.join('')
  }
  decrypt(txt, key) {
    if (!txt || !key) throw new Error('Incorrect arguments!');
    txt = txt.toUpperCase();
    key = key.toUpperCase();
    let code = [], final = [];
    for (let i = 0, n = 0; i < txt.length; i++) {
      if (this.alphabet.includes(txt[i])) { code.push(this.alphabet.indexOf(txt[i]) - this.alphabet.indexOf(key[n])), n++ }
      else code.push(txt[i]);
      if (n >= key.length) { n = 0 };
    }
    for (let e = 0; e < code.length; e++) {
      if (typeof (code[e]) !== "number") final.push(code[e]);
      if (code[e] >= 0) {
        for (let i = 0, n = 0; i <= code[e]; i++, n++) {
          if (n >= 26) n = 0;
          if (i === code[e]) final.push(this.alphabet[n]);
        }
      } else {
        for (let i = 26, n = 26; i >= code[e]; i--, n--) {
          if (n <= 0) n = 26;
          if (i === code[e]) final.push(this.alphabet[n]);
        }
      }
    }
    return !this.bool ? final.reverse().join('') : final.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
