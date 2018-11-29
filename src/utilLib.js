const parseInput = function(aliveCellsInput,{length,breadth}) {
  aliveCellPositions= aliveCellsInput.split(" ");
  aliveCellCoordinates = [];
  aliveCellPositions.forEach((x)=> {
    aliveCellCoordinates.push(
      [Math.floor((x-1)/length),(x-1)%length]
    );
  });
  return aliveCellCoordinates;
}

exports.parseInput = parseInput;

