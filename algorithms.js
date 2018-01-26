'use strict';

const Stack = require('./stack');

//== PALINDROMES==//

const palinDromes = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let strStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }

  //For loop that goes to half of the string length-then map what we're
  //popping to the str[0]
  
  let newStr = '';
  while (strStack.top !== null) {
    newStr += strStack.pop();
  }
  return newStr === str;

};

console.log(palinDromes('A man, a plan, a canal: Panama'));
console.log(palinDromes('dad'));
console.log(palinDromes('1001'));
console.log(palinDromes('Tauhida'));


//== MATCHING PARENTHESES ==//

//Example: (1+2)+3
//Example 2: )1+2)+3

//Check that for every open parentheses we have a close parentheses
//If I see an open parentheses I will push only the open parentheses to the stack
//If I see a closed parentheses I'll pop (only open parenthese will be available to pop) everything out of the stack
//If stack is empty, parentheses are valid