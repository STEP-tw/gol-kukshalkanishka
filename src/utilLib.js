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

const repeat = function(times, char) {
return new Array(times).fill(char).join("");
}

const createPrintableBoard = function(grid){
  let longestLength = calculateLongestElement(grid).length;
  let printableBoard= grid.map((row)=>row.map((col)=>{
    while((col+"").length<longestLength){
      col=" "+col;
    }
    return col;
  }));
  printableBoard = printableBoard.map((row) =>"|"+row.join("|")+"|");
  let border = repeat(printableBoard[0].length, "-");
  printableBoard = border+"\n"+printableBoard.join("\n"+border+"\n")+"\n"+border;
  return printableBoard;
}

const convertCellNotation = function(grid) {
  return grid.map((x)=>x.map((y) => {if(y==1)return "*"; else{return " ";}}));
}

exports.parseInput = parseInput;
exports.createPrintableBoard = createPrintableBoard;
exports.convertCellNotation = convertCellNotation;
