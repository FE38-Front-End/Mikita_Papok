const sideValue = document.getElementsByClassName('input-side')[0];
const submitButtonSide = document.getElementById('side-button');
let diam = 0;
let side = 0;
let step = 0;
let initialX = [0];
let initialY = [0];
const circle = document.getElementsByClassName('circle')[0];
const diamValue = document.getElementsByClassName('input-diametr')[0];
const diamSubmitButton = document.getElementById('diametr-button');
const stepValue = document.getElementsByClassName('input-step')[0];
const stepSubmitButton = document.getElementById('step-button');
const up = document.getElementsByClassName('navigation-button__up');
const down = document.getElementsByClassName('navigation-button__down');
const left = document.getElementsByClassName('navigation-button__left');
const right = document.getElementsByClassName('navigation-button__right');

function getValue(name) {
    return localStorage.getItem(name) || '';
}

sideValue.addEventListener("change", event => {
    localStorage.setItem('sideValue', sideValue.value);
});
sideValue.value = getValue('sideValue');

diamValue.addEventListener("change", event => {
    localStorage.setItem('diamValue', diamValue.value);

})
diamValue.value = getValue('diamValue');

stepValue.addEventListener("change", event => {
    localStorage.setItem('inputStep', stepValue.value);
})
stepValue.value = getValue('inputStep');

submitButtonSide.addEventListener('click', event => {
    side = Number(sideValue.value);
    const square = document.getElementsByClassName('border')[0];
    square.classList.add('border-show');
    square.getAttribute('style');
    square.style.width = ` ${side}px`;
    square.style.height = ` ${side}px`;
})

diamSubmitButton.addEventListener('click', event => {
    diam = Number(diamValue.value);
    diam = diam / 2;
    if (diam < side) {
        circle.classList.add('circle-show');
        circle.getAttribute('style');
        circle.style.width = `${diam}px`;
        circle.style.height = `${diam}px`;
    } else {
        alert('Размер круга не должен превышать размер квадрата')
    };
})


stepSubmitButton.addEventListener('click', event => {
    step = Number(stepValue.value);
})
const block = document.querySelector('.input-block');

block.addEventListener('click', e => {
    const a = e.target.dataset.type;
    const fringleMinus = (side / 2 - diam / 2) * (-1);
    const fringle = side / 2 - diam / 2;

    switch (a) {
        case 'up':
            down.disabled = false;
            initialY[0] -= step;
            if (initialY > fringleMinus) {
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
            } else if (initialY[0] < fringleMinus) {
                initialY[0] = fringleMinus;
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
                up.disabled = true;
            } else if (initialY[0] === fringleMinus) {
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
                up.disabled = true;
            }
            break;
        case 'down':
            up.disabled = false;
            initialY[0] += step;
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
            break;
        case 'left':
            right.disabled = false;
            initialX[0] -= step;
            if (initialX > fringleMinus) {
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
            } else if (initialX[0] < fringleMinus) {
                initialX[0] = fringleMinus;
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
                left.disabled = true;
            } else if (initialX[0] === fringleMinus) {
                circle.style.transform = `translate(${initialX[0]}px,${initialY[0]}px)`;
                left.disabled = true;
            }
            break;
        case 'right':
            left.disabled = false;
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
            break;
    }
})