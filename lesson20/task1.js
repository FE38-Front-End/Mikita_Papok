const buttonUl = document.getElementById('append-ul-button');
const buttonLi = document.getElementById('append-li-button');
const buttonRemove = document.getElementById('remove-last-child-button');
var date = new Date();
const createList = document.createElement('ul');

buttonUl.addEventListener('click', event => {

    createList.textContent = 'Это список';
    createList.classList.add('list');

    return document.body.appendChild(createList);
});

buttonLi.addEventListener('click', event => {
    const createListElement = document.createElement('li');
    createListElement.textContent = `${date.getHours()}: ${date.getMinutes()}`;
    if (document.getElementsByClassName('list').length > 0) {
        return createList.appendChild(createListElement);
    } else {
        return alert('списка не существует');
    }
})

buttonRemove.addEventListener('click', event => {
    if (document.getElementsByClassName('list').length > 0 && createList.children.length > 0) {
        return createList.removeChild(createList.lastElementChild);
    } else {
        return alert('нечего удалять')

    }

})