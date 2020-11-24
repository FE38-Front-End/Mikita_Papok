const a = Number(prompt('visota'));
const b = Number(prompt('shirina'));
const c = Number(prompt('glubina'));
const d = Number(prompt('diametr'));
var ploshKont = a * b;
var diamTrub = (Math.PI * (d ** 2)) / 4;
var countTrub = (Math.floor(ploshKont / diamTrub)) * c;

console.log(countTrub);