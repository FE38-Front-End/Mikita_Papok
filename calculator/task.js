let input = document.getElementsByTagName('input')[0];
let tempEqual = 0;
let tempEqualTwo = 0;
const memoryBlock = document.querySelector('.calc-memory');


function putSome(num) {
    input.value += `${num}`;

}
const numPad = document.querySelector('.calc-numbers');

numPad.addEventListener('click', event => {
    let begValue = '';
    let finValue = '';
    let shortCutFirst = ' ';
    let shortCutLast = ' ';
    const symbol = event.target.dataset.type;

    switch (symbol) {
        case 'one':
            putSome(1);
            break;
        case 'two':
            putSome(2);
            break;
        case 'three':
            putSome(3);
            break;
        case 'four':
            putSome(4);
            break;
        case 'five':
            putSome(5);
            break;
        case 'six':
            putSome(6);
            break;
        case 'seven':
            putSome(7);
            break;
        case 'eight':
            putSome(8);
            break;
        case 'nine':
            putSome(9);
            break;
        case 'zero':
            putSome(0);
            break;
        case 'plus':
            putSome(` + `);
            break;
        case 'minus':
            putSome(` - `);
            break;
        case 'div':
            putSome(` / `);
            break;
        case 'clean':
            input.value = '';
            break;
        case 'equal':
            tempEqual = eval(input.value);
            input.value = '';
            input.value += tempEqual
            break;
        case 'multiply':
            putSome(` * `);
            break;
        case 'sqrt':
            begValue = input.value.split(' ');
            input.value = '';
            finValue = Math.sqrt(begValue[begValue.length - 1]);
            begValue.splice(begValue.length - 1, 1, `${finValue}`);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'percent':
            begValue = input.value.split(' ');
            input.value = '';
            shortCutFirst = begValue[0];
            shortCutLast = begValue[begValue.length - 1];
            finValue = shortCutFirst / 100 * shortCutLast;
            begValue.splice(begValue.length - 1, 1, `${finValue}`);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'ce':
            begValue = input.value.split(' ');
            input.value = '';
            begValue.splice(begValue.length - 1, 1);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'exp':
            begValue = input.value.split(' ');
            input.value = '';
            shortCutLast = begValue[begValue.length - 1];
            finValue = shortCutLast ** 2;
            begValue.splice(begValue.length - 1, 1, `${finValue}`);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'fract':
            begValue = input.value.split(' ');
            input.value = '';
            shortCutLast = begValue[begValue.length - 1];
            finValue = 1 / shortCutLast;
            begValue.splice(begValue.length - 1, 1, `${finValue}`);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'del':
            let short = input.value;
            short.substring(0, short.length - 1);
            input.value = short.substring(0, short.length - 1);
            break;
        case 'reverse':
            begValue = input.value.split(' ');
            input.value = '';
            shortCutLast = begValue[begValue.length - 1];
            finValue = shortCutLast * (-1);
            begValue.splice(begValue.length - 1, 1, `${finValue}`);
            begValue = begValue.join(' ');
            input.value = begValue;
            break;
        case 'dot':
            putSome('.');
            break;
        case 'ms':
            localStorage.setItem('mmr', eval(input.value));
            console.log(localStorage);
            input.value = '';
            break;
        case 'mr':
            input.value += localStorage.getItem('mmr');
            console.log(localStorage.getItem('mmr'));
            break;
    }
})

memoryBlock.addEventListener('click', event => {
    let localValue = 0;
    const memory = event.target.dataset.type;
    switch (memory) {
        case 'ms':
            localStorage.setItem('mmr', eval(input.value));
            console.log(localStorage);
            input.value = '';
            break;
        case 'mr':
            input.value += localStorage.getItem('mmr');
            break;
        case 'mc':
            localStorage.clear();
            break;
        case 'mPlus':
            localValue = Number(localStorage.getItem('mmr'));
            localValue += eval(input.value);
            console.log(localValue);
            localStorage.removeItem('mmr');
            console.log(localStorage);
            localStorage.setItem('mmr', localValue)
            break;
        case 'mMinus':
            localValue = Number(localStorage.getItem('mmr'));
            localValue -= eval(input.value);
            console.log(localValue);
            localStorage.removeItem('mmr');
            console.log(localStorage);
            localStorage.setItem('mmr', localValue)
            break;
    }
})