const contHeight = Number(prompt('visota'));
const contWidth = Number(prompt('shirina'));
const contDeep = Number(prompt('glubina'));
const pipeDiam = Number(prompt('diametr'));
let kontSquare = contHeight * contWidth;
let pipeSquare = Math.PI * pipeDiam ** 2 / 4;
let countPipe = Math.floor(kontSquare / pipeSquare) * contDeep;
console.log(countPipe);