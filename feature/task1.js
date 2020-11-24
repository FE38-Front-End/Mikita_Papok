const a = Number(prompt('visota'));
const b = Number(prompt('shirina'));
const c = Number(prompt('glubina'));
const d = Number(prompt('diametr'));
var ploshKont = a * b;
var PipeSquare = Math.PI * d ** 2 / 4;
var countPipe = Math.floor(ploshKont / diamTrub) * c;

console.log(countPipe);