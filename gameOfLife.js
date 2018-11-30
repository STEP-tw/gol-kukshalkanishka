const {world} = require('./src/GOLLib.js');
const {parseInput, 
createPrintableBoard} = require('./src/utilLib.js');
const readline = require('readline-sync');

const main = function() {
  let length = +readline.question('enter world length : ');
  let breadth = +readline.question('enter world breadth : ');
  let labelledGrid = world.createLabelledGrid({length,breadth});
  console.log(createPrintableBoard(labelledGrid));
  let aliveCellsInput = readline.question('Enter alive cells position with spaces : ');
  let aliveCells = parseInput(aliveCellsInput, {length, breadth}); 
  console.log(createPrintableBoard(world.updateWorld(aliveCells)));
  let iteration = readline.question('enter desired iteration value : ');
  console.log(createPrintableBoard(world.runWorld(iteration)));
}

main();
