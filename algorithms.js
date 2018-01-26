'use strict';

const Stack = require('./stack');

//== PALINDROMES==//

const palinDromes = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newStr = '';

  let strStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }

  while (strStack.top !== null) {
    newStr += strStack.pop();
  }
  return newStr === str;

};

console.log(palinDromes('A man, a plan, a canal: Panama'));
console.log(palinDromes('dad'));
console.log(palinDromes('1001'));
console.log(palinDromes('Tauhida'));

