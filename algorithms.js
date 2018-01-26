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

// console.log(palinDromes('A man, a plan, a canal: Panama'));
// console.log(palinDromes('dad'));
// console.log(palinDromes('1001'));
// console.log(palinDromes('Tauhida'));


//== MATCHING PARENTHESES ==//

//Example: (1+2)+3
//Example 2: )1+2)+3

//Check that for every open parentheses we have a close parentheses
//If I see an open parentheses I will push only the open parentheses to the stack
//If I see a closed parentheses I'll pop (only open parenthese will be available to pop) everything out of the stack
//If stack is empty, parentheses are valid

const matchParens = function(parens) {

  //compare popped value to the input
  //case would be type of parens
  //switch(parentsStack.value)
  let parensStack = new Stack();
  let topValue = null;


  const peek = stack => {
    // console.log('peek fn top value', topValue)
    if (stack.top === null) {
      return null;
    } else {
      topValue = stack.top.data;
      return topValue;
    }
  };


  for (let i=0; i < parens.length; i++) {

    if(parens[i] === '(' || parens[i] === '{' || parens[i] === '[') {
      parensStack.push(parens[i]);
      console.log('Our stack >>>>>>', parensStack);
    }

    
    else if (parens[i] === ')' ) {
      peek(parensStack);
      if (topValue === '(') {
        parensStack.pop();
      } else {
        return `Was expecting ( but instead got ${topValue ? topValue : parens[i]}`;
      }
    }
    else if (parens[i] === ']' ) {
      peek(parensStack);
      if (topValue === '[') {
        parensStack.pop();
      } else {
        return `Was expecting [ but instead got ${topValue}`;
      }
    }
    else if (parens[i] === '}' ) {
      peek(parensStack);
      if (topValue === '{') {
        parensStack.pop();
      } else {
        return `Was expecting { but instead got ${topValue}`;
      }
    }
    // else if (parens[i] === ']' ) {
    //   peek(parensStack);
    //   if (parensStack.top.data === '[') {
    //     parensStack.pop();
    //   } else {
    //     return `Was expecting ] but instead for ${parensStack.top.data}`;
    //   }
    // }
    // else if (parens[i] === '}') {
    //   peek(parensStack);
    //   if (parensStack.top.data === '{') {
    //     parensStack.pop();
    //   } else {
    //     return `Was expecting } but instead for ${parensStack.top.data}`;
    //   }
      
    // }
    // else if (parens[i]===(')' || ']' || '}')){
    //   parensStack.pop();
    // }
    else if (!topValue && parens[i] === ')' || parens[i] ===  ']' || parens[i] === '}') {
      return 'Invalid parens';
    }
    else {
      return 'Parens are valid or no parens present';
    }
  }
  // else {
  //   console.log('i ran');
  //   return 'Invalid parens';
  // }
};

// console.log(matchParens('([1+2])+3'));
console.log(matchParens('((1+2)+3'));
// console.log(matchParens('hello'));