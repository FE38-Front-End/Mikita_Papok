let nomberList = [];
const n = Number(prompt('введите число'));
for (let i = 1; i <= n; i++) {
    nomberList.push(i);
}
const list = document.createElement('ul');
list.textContent = 'Задание 2';
const fr = document.createDocumentFragment();
nomberList.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    fr.appendChild(item);
})
list.appendChild(fr);
document.body.appendChild(list);