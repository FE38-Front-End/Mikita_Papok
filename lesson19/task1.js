const elements = document.getElementsByTagName('li');
let elementsList = [...elements];
elementsList.forEach((element) => {
    var i = elementsList.indexOf(element);
    elementsList.splice(i, 1, element.firstChild.data);

})
elementsList = elementsList.join(' ');
console.log(elementsList);