const {world} = require('./GOLLib.js');

const calculateAliveCellsPos = function(grid, {length, breadth}) {
  let aliveCellsPos =[];
  for(let row = 0; row < breadth; row++) {
    for(let column = 0; column < length; column++){
      if(grid[row][column]==1){
        aliveCellsPos.push([row,column]);
      }
    }
  }
  return aliveCellsPos;
}

const updateWorld = function(currGeneration, {topLeft, bottomRight}) {
  let aliveCells = currGeneration.map(
    (cell)=>[cell[0]-topLeft[0],cell[1]-topLeft[1]]
  );
  world.updateWorld(aliveCells);
  return;
}

const nextGeneration = function(currGeneration,{topLeft,bottomRight}) {
  let breadth = bottomRight[0]-topLeft[0] +1;
  let length = bottomRight[1]-topLeft[1] +1;
  world.generateGrid({length,breadth});
  updateWorld(currGeneration, {topLeft, bottomRight});
  let newGeneration = world.runWorld(1);
  let alivePositions=calculateAliveCellsPos(newGeneration, {length, breadth});
  alivePositions=alivePositions.map(
    (cell)=>[cell[0]+topLeft[0],cell[1]+topLeft[1]]
  );
  return alivePositions;
}

module.exports = { nextGeneration };
