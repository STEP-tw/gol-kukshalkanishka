const {world} = require('./src/GOLLib.js');
const {parseInput, 
createPrintableBoard,
convertCellNotation} = require('./src/utilLib.js');
const question = require('readline-sync').question;

const main = function() {
  let length = +question('enter world length : ');
  let breadth = +question('enter world breadth : ');
  let labelledGrid = world.createLabelledGrid({length,breadth});
  console.log(createPrintableBoard(labelledGrid));
  let aliveCellsInput = question('Enter alive cells position with spaces : ');
  let aliveCells = parseInput(aliveCellsInput, {length, breadth}); 
  let updatedWorld = convertCellNotation(world.updateWorld(aliveCells));
  console.log(createPrintableBoard(updatedWorld));
  let iteration = +question('enter desired iteration value : ');
  let desiredGeneration = convertCellNotation(world.runWorld(iteration));
  console.log(createPrintableBoard(desiredGeneration));
}

main();
