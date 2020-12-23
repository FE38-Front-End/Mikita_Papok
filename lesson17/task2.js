let arr1 = [];
var randArr = function (min, max) {
    let a;
    for (let i = 0; i <= 7; i++) {
        a = Math.floor(Math.random() * (max - min + 1) + min);
        if (arr1.includes(a)) {
            do {
                a = Math.floor(Math.random() * (max - min + 1) + min);
            } while (arr1.includes(a));
        }
        arr1.push(a);

    }
    return arr1;
}
var constRand = randArr(0, 10);
console.log(constRand);
constRand.sort((a, b) => a - b);
console.log(constRand);