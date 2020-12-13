const inputSide = document.getElementsByClassName('input-side')[0];
const sideInput = document.getElementById('side-button');
let diam = 0;
let side = 0;
let step = 0;
let initialX = [0];
let initialY = [0];
const circle = document.getElementsByClassName('circle')[0];
const inputDiam = document.getElementsByClassName('input-diametr')[0];
const diamInput = document.getElementById('diametr-button');
const inputStep = document.getElementsByClassName('input-step')[0];
const stepInput = document.getElementById('step-button');
const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');
const VALUE_KEY = 'value';

function getValue(name) {
    return localStorage.getItem(name) || '';
}

inputSide.addEventListener("change", event => {
    localStorage.setItem('inputSide', inputSide.value);
});
inputSide.value = getValue('inputSide');

inputDiam.addEventListener("change",event=>{
    localStorage.setItem('inputDiam',inputDiam.value);

})
inputDiam.value=getValue('inputDiam');

inputStep.addEventListener("change",event=>{
    localStorage.setItem('inputStep',inputStep.value);
})
inputStep.value=getValue('inputStep');


sideInput.addEventListener('click', event => {
    side = Number(inputSide.value);
    const square = document.getElementsByClassName('border')[0];
    square.getAttribute('style');
    square.style.width = ` ${side}px`;
    square.style.height = ` ${side}px`;
    square.style.border = '1px solid black';

})

diamInput.addEventListener('click', event => {
    diam = Number(inputDiam.value);
    diam = diam / 2;
    if (diam < side) {
        // const circle = document.getElementsByClassName('circle')[0];
        circle.getAttribute('style');
        circle.style.width = `${diam}px`;
        circle.style.height = `${diam}px`;
        circle.style.border = `1px solid black`;
        circle.style.borderRadius = '100%';
        circle.style.transform = `translate(0)`;
    } else {
        alert('Размер круга не должен превышать размер квадрата')
    };
})


stepInput.addEventListener('click', event => {
    step = Number(inputStep.value);
})

up.addEventListener('click', event => {
    down.disabled = false;
    let fringle = ((side / 2) - (diam / 2)) * (-1);
    initialY[0] -= step;
    if (initialY > fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else if (initialY[0] < fringle) {
        initialY[0] = fringle;
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        up.disabled = true;
    } else if (initialY[0] === fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        up.disabled = true;
    }
})

down.addEventListener('click', event => {
    up.disabled = false;
    let fringle = ((side / 2) - (diam / 2));
    initialY[0] += step;;
    if (initialY[0] < fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        down.disabled = false;
    } else if (initialY[0] > fringle) {
        initialY[0] = fringle;
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        down.disabled = true;
    } else if (initialY[0] === fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        down.disabled = true;
    }
})

left.addEventListener('click', event => {
    right.disabled = false;
    let fringle = ((side / 2) - (diam / 2)) * (-1);
    initialX[0] -= step;
    if (initialX > fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else if (initialX[0] < fringle) {
        initialX[0] = fringle;
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        left.disabled = true;
    } else if (initialX[0] === fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        left.disabled = true;
    }
})

right.addEventListener('click', event => {
    left.disabled = false;
    let fringle = ((side / 2) - (diam / 2));
    let coordY = initialX[0];
    coordY += step;
    initialX[0] = coordY;
    if (initialX[0] < fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        down.disabled = false;
    } else if (initialX[0] > fringle) {
        initialX[0] = fringle;
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        down.disabled = true;
    } else if (initialX[0] === fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
        right.disabled = true;
    }
})