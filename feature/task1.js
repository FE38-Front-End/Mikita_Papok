const conten = function (len, win, dp, diamTrub) {
    let p = len * win;
    if (diamTrub < p) {

        return function () {
            let metrTrub;
            let countMetr = 0;
            while (p > diamTrub) {
                metrTrub = dp;
                p -= dp;
                countMetr += metrTrub;
            }
            return countMetr;
        }
    } else {
        return console.log('не поместится');
    }
}
const a = Number(prompt('visota'));
const b = Number(prompt('shirina'));
const c = Number(prompt('glubina'));
const d = Number(prompt('diametr'));

var countTrub = conten(a, b, c, d);
console.log(countTrub());