//zadanie1
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let total = Object.values(salaries);
const totalValue = total.reduce((acc, q) => {
    console.log(acc);
    return acc += q;
}, 0);
console.log(totalValue);

//zadanie 2
let dom = [];
const pod = Number(prompt('Введите кол-во подъездов'));
const etaz = Number(prompt('введите кол-во этажей'));
const apart = Number(prompt('введите кол-во квартир на этаже'));
const obshee = (etaz * apart) * pod;
let apartaments = [];
for (let i = 1; i <= obshee; i++) {
    apartaments.push(i);
};
let nomeraKvartir = [];

for (let a = 1; a <= pod; a++) {
    let dannie = {
        'podiezd': a
    };
    for (let b = 1; b <= etaz; b++) {
        nomeraKvartir.push(apartaments.slice(0, apart));
        apartaments.splice(0, apart);
        dannie[`etazh ${b}`] = nomeraKvartir;
        nomeraKvartir = [];
    }
    dom.push(dannie);
}
console.log(dom);