'use strict';

const Stack = require('./stack');

function createStack(){
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(JSON.stringify(starTrek, null, 2));
}

createStack();