const contHeight = Number(prompt('Введите высоту контейнера в метрах'));
const contWidth = Number(prompt('Введите ширину контейнера в метрах'));
const contDeep = Number(prompt('Введите длину контейнера в метрах'));
let pipeList = [];
let count1 = 0;
let pipeDiam = 0;
let finalCapacity = 0;
let shortMess = {
        'В контейнер помещается': {}
};
let lotPipe = [];
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
                lotPipe.push(Math.floor(initialCapacity / pipeSquare));
                return Math.floor(initialCapacity / pipeSquare) * contDeep;
        };
}


for (let countDiam = 0; countDiam < pipeList.length; countDiam++) {
        if (countDiam === 0) {
                finalCapacity = kontCapacity(kontSquare)(pipeList[countDiam]);
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[countDiam]} м.`] = `${finalCapacity} метров`;
        } else {
                capacity = Math.PI * pipeList[countDiam - 1] ** 2 / 4;

                finalCapacity = kontCapacity(capacity)(pipeList[countDiam]) * lotPipe[countDiam - 1];
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[countDiam]} м.`] = `${finalCapacity} метров`;
        }
}

console.log(shortMess);