const parseInput = function(aliveCellsInput) {
return aliveCellsInput.split(" ").map((x)=>x.split(",").map((y)=>+y));
}

exports.parseInput = parseInput;

