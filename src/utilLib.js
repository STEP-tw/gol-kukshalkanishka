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

const calculateLongestElement = function(list) {
  return list.reduce((element1, element2) => element2.reduce(
    (element1, element2) => 
    (element1 + "").length>(element1 + "").length?element1:element2)+"");
}

const createPrintableBoard = function(grid){
  longestLength = calculateLongestElement(grid).length;
  printableBoard= grid.map((row)=>row.map((col)=>{
    while((col+"").length<longestLength){
      col=" "+col;
    }
    return col;
  }));

  printableBoard = printableBoard.map((row) =>"|"+row.join("|")+"|");
  border = new Array((printableBoard[0].length)).fill("-").join("");
  printableBoard = border+"\n"+printableBoard.join("\n"+border+"\n")+"\n"+border;
  return printableBoard;
}

exports.parseInput = parseInput;
exports.createPrintableBoard = createPrintableBoard;
