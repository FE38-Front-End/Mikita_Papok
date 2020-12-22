const buttonUl = document.getElementById('append-ul-button');
const buttonLi = document.getElementById('append-li-button');
const buttonRemove = document.getElementById('remove-last-child-button');
const date = new Date();
const list = document.createElement('ul');
const li = 'list';

buttonUl.addEventListener('click', event => {
    list.textContent = 'Это список';
    list.classList.add(li);
    document.body.appendChild(list);
});

buttonLi.addEventListener('click', event => {
    const listElement = document.createElement('li');
    const date = new Date();
    listElement.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

    if (document.getElementsByClassName(li).length > 0) {
        return list.appendChild(listElement);
    } else {
        return alert('списка не существует');
    }
})

buttonRemove.addEventListener('click', event => {
    if (document.getElementsByClassName(li).length > 0 && list.children.length > 0) {
        return list.removeChild(list.lastElementChild);
    } else {
        return alert('нечего удалять')

    }

})