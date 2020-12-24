const seven = document.getElementById('seven');
const two = document.getElementById('two');
const one = document.getElementById('one');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const clean = document.getElementById('clean');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const div = document.getElementById('div');
const sqrt = document.getElementById('sqrt');
const persent = document.getElementById('percent');
const ce = document.getElementById('ce');
const exp = document.getElementById('exp');
const fract = document.getElementById('fract');
const del = document.getElementById('del');
const ms = document.getElementById('ms');
const mr = document.getElementById('mr');
const mc = document.getElementById('mc');
const mPlus = document.getElementById('m-plus');
const mMinus = document.getElementById('m-minus');
const reverse = document.getElementById('reverse');
const dot = document.getElementById('dot');
let input = document.getElementsByTagName('input')[0];
let tempEqual = 0;
let tempEqualTwo = 0;

multiply.addEventListener('click', event => {
    input.value += ` * `;
})

clean.addEventListener('click', event => {
    input.value = '';
})

zero.addEventListener('click', event => {
    input.value += `0`;
})

one.addEventListener('click', event => {
    input.value += `1`;
})

three.addEventListener('click', event => {
    input.value += `3`;
})

four.addEventListener('click', event => {
    input.value += `4`;
})

five.addEventListener('click', event => {
    input.value += `5`;
})

six.addEventListener('click', event => {
    input.value += `6`;
})

eight.addEventListener('click', event => {
    input.value += `8`;
})

nine.addEventListener('click', event => {
    input.value += `9`;
})
seven.addEventListener('click', event => {
    input.value += `7`;
})

two.addEventListener('click', event => {
    input.value += `2`;
})

plus.addEventListener('click', event => {
    input.value += ` + `;
})

minus.addEventListener('click', event => {
    input.value += ` - `;
})

div.addEventListener('click', event => {
    input.value += ` / `;
})


equal.addEventListener('click', event => {
    tempEqual = eval(input.value);
    input.value = '';
    input.value += tempEqual;
})

sqrt.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    let finValue = Math.sqrt(begValue[begValue.length - 1]);
    begValue.splice(begValue.length - 1, 1, `${finValue}`);
    begValue = begValue.join(' ');
    input.value = begValue;
})

persent.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    let shortCutFirst = begValue[0];
    let shortCutLast = begValue[begValue.length - 1];
    let finValue = shortCutFirst / 100 * shortCutLast;
    begValue.splice(begValue.length - 1, 1, `${finValue}`);
    begValue = begValue.join(' ');
    input.value = begValue;
})

ce.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    begValue.splice(begValue.length - 1, 1);
    begValue = begValue.join(' ');
    input.value = begValue;

})
exp.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    let shortCutLast = begValue[begValue.length - 1];
    let finValue = shortCutLast ** 2;
    begValue.splice(begValue.length - 1, 1, `${finValue}`);
    begValue = begValue.join(' ');
    input.value = begValue;
})

fract.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    let shortCutLast = begValue[begValue.length - 1];
    let finValue = 1 / shortCutLast;
    begValue.splice(begValue.length - 1, 1, `${finValue}`);
    begValue = begValue.join(' ');
    input.value = begValue;
})

del.addEventListener('click', event => {
    let short = input.value;
    short.substring(0, short.length - 1);
    input.value = short.substring(0, short.length - 1);
})

ms.addEventListener('click', event => {
    localStorage.setItem('mmr', eval(input.value));
    console.log(localStorage);
    input.value = '';
})

mc.addEventListener('click', event => {
    localStorage.clear();
})

mr.addEventListener('click', event => {
    input.value += localStorage.getItem('mmr');
})

mPlus.addEventListener('click', event => {
    let localValue = Number(localStorage.getItem('mmr'));
    localValue += eval(input.value);
    console.log(localValue)
    localStorage.removeItem('mmr');
    console.log(localStorage);
    localStorage.setItem('mmr', localValue)

})

mMinus.addEventListener('click', event => {
    let localValue = Number(localStorage.getItem('mmr'));
    localValue -= eval(input.value);
    console.log(localValue)
    localStorage.removeItem('mmr');
    console.log(localStorage);
    localStorage.setItem('mmr', localValue)
})

reverse.addEventListener('click', event => {
    let begValue = input.value.split(' ');
    input.value = '';
    let shortCutLast = begValue[begValue.length - 1];
    let finValue = shortCutLast * (-1);
    begValue.splice(begValue.length - 1, 1, `${finValue}`);
    begValue = begValue.join(' ');
    input.value = begValue;
})

dot.addEventListener('click', event => {
    input.value += '.';
})