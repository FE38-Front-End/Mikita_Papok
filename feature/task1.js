const a = Number(prompt('visota'));
const b = Number(prompt('shirina'));
const c = Number(prompt('glubina'));
const d = Number(prompt('diametr'));
let kontSquare = a * b;
let pipeSquare = Math.PI * d ** 2 / 4;
let countPipe = Math.floor(kontSquare / pipeSquare) * c;
console.log(countPipe);
