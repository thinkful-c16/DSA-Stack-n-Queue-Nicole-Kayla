'use strict';

const Stack = require('./stack');
let starTrek = new Stack();


function createStack(){

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek, null, 2));
}

createStack();

const helpers = {
  peek: function(stack) {
    return stack.top.data;
  },

  display: function(stack) {
    console.log(JSON.stringify(stack, null, 2));
  }
};


// console.log(helpers.peek(starTrek));
helpers.display(starTrek);