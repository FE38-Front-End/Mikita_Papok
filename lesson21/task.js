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
    let fringle = ((side / 2) - (diam / 2)) * (-1);
    initialY[0] -= step;
    if (initialY >= fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else {
        initialY[0] += step;
        up.preventDeafault;
    }
})

down.addEventListener('click', event => {
    let fringle = ((side / 2) - (diam / 2));
    let coordY = initialY[0];
    coordY += step;
    initialY[0] = coordY;
    if (initialY <= fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else {
        initialY[0] -= step;
        up.preventDeafault;
    }
})

left.addEventListener('click', event => {
    let fringle = ((side / 2) - (diam / 2)) * (-1);
    initialX[0] -= step;
    if (initialX >= fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else {
        initialX[0] += step;
        left.preventDeafault;
    }

})

right.addEventListener('click', event => {
    let fringle = ((side / 2) - (diam / 2));
    let coordX = initialX[0];
    coordX += step;
    initialX[0] = coordX;
    if (initialX <= fringle) {
        circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
    } else {
        initialX[0] -= step;
        up.preventDeafault;
    }


})