const {world} = require('./src/GOLLib.js');
const {parseInput} = require('./src/utilLib.js');
const readline = require('readline-sync');

const main = function() {
  let length = +readline.question('enter world length : ');
  let breadth = +readline.question('enter world breadth : ');
  console.log(world.createLabelledGrid({length,breadth}));
  let aliveCellsInput = readline.question('Enter alive cells position with spaces : ');
  let aliveCells = parseInput(aliveCellsInput); 
  console.log(world.updateWorld(aliveCells));
  let iteration = readline.question('enter desired iteration value : ');
  console.log(world.runWorld(iteration));
}

main();
