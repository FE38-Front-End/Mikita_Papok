// const contHeight = Number(prompt('visota'));
// const contWidth = Number(prompt('shirina'));
// const contDeep = Number(prompt('glubina'));
// let pipeList = [];
// let count1 = 0;
// let d = 0;
// while (true) {
//     d = Number(prompt('введите диаметр трубы'));
//     if (Boolean(d) === true) {
//         count1 = Math.PI * d ** 2 / 4;
//         count1 = Number(count1);
//         pipeList.push(count1);
//     } else {
//         break;
//     }
// }
// pipeList.sort((a, b) => a - b);
// pipeList = pipeList.reverse();
// console.log(pipeList);

// for( n of pipeList){
//     console.log(n);
// }

const contHeight = Number(prompt('visota'));
const contWidth = Number(prompt('shirina'));
const contDeep = Number(prompt('glubina'));
const pipeDiam = Number(prompt('diametr'));
let kontSquare = contHeight * contWidth;
let pipeSquare = Math.PI * pipeDiam ** 2 / 4;
let countPipe = Math.floor(kontSquare / pipeSquare) * contDeep;
console.log(countPipe);
//площидь большой трубы делить на площадь трубы меньше, так мы узнаем, сколько труб влезет 12