const contHeight = Number(prompt('Введите высоту контейнера в метрах'));
const contWidth = Number(prompt('Введите ширину контейнера в метрах'));
const contDeep = Number(prompt('Введите длину контейнера в метрах'));
let pipeList=[];
let count1 = 0;
let pipeDiam = 0;
let finalCapacity = 0;
let shortMess = {'В контейнер помещается':{}};
while (true) {
        pipeDiam = Number(prompt('введите диаметр трубы в метрах'));
        if (Boolean(pipeDiam) === true) {
                count1 = Number(pipeDiam);
                pipeList.push(count1);
        } else {
                break;
        }
}
pipeList.sort((a, b) => a - b);
pipeList = pipeList.reverse();
let kontSquare = contHeight * contWidth;
let initialCapacity = 0;
const kontCapacity = function (capacity) {
        initialCapacity = capacity;
        return function (pipeDiam) {
                let pipeSquare = Math.PI * pipeDiam ** 2 / 4;
                return Math.floor(initialCapacity / pipeSquare) * contDeep;
        };
}


for (let countDiam = 0; countDiam < pipeList.length; countDiam++) {
        if (countDiam === 0) {
                finalCapacity = kontCapacity(kontSquare)(pipeList[countDiam]);
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[countDiam]} м.`] = `${finalCapacity} метров`;
        } else {
                capacity = Math.PI * pipeList[countDiam - 1] ** 2 / 4;
                finalCapacity = kontCapacity(capacity)(pipeList[countDiam]);
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[countDiam]} м.`] = `${finalCapacity} метров`;
        }
}

console.log(shortMess);





























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
// // console.log(pipeList);

// for(let i=0; i<pipeList.length;i++){
//     if (i=0){

//     }
// }