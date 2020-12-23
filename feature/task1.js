const contHeight = Number(prompt('Введите высоту контейнера в метрах'));
const contWidth = Number(prompt('Введите ширину контейнера в метрах'));
const contDeep = Number(prompt('Введите длину контейнера в метрах'));
let pipeList = [];
let count1 = 0;
let pipeDiam = 0;
let pipeCapacity = 0;
let lotPipe = [];
let shortMess = {
        'В контейнер помещается': {}
};

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
for (let i = 0; i < pipeList.length; i++) {
        var capacity = Math.PI * pipeList[i] ** 2 / 4;
        if (i === 0) {
                lotPipe.push(Math.floor(kontSquare / capacity));
                pipeCapacity = Math.floor(kontSquare / capacity) * contDeep;
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[i]} м.`] = `${pipeCapacity} метров`;
        } else {
                capacity = Math.PI * pipeList[i - 1] ** 2 / 4;
                var pipeSquare = Math.PI * pipeList[i] ** 2 / 4;
                lotPipe.push((Math.floor(capacity / pipeSquare)) * lotPipe[i - 1]);
                pipeCapacity = (Math.floor(capacity / pipeSquare) * contDeep) * lotPipe[i - 1];
                shortMess['В контейнер помещается'][`труба диаметром ${pipeList[i]} м.`] = `${pipeCapacity} метров`;
        }
}
console.log(shortMess);