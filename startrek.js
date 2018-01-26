'use strict';

const Stack = require('./stack');
let starTrek = new Stack();


function createStack(){

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(JSON.stringify(starTrek, null, 2));
}

createStack();

const helpers = {
  peek: function(stack) {
    return stack.top.data;
  }
};


console.log(helpers.peek(starTrek));