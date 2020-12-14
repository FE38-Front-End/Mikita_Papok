const elements = document.getElementsByTagName('li');
let elementsList = [...elements];
elementsList.forEach((element,index) => {
    var index = elementsList.indexOf(element);
    elementsList.splice(index, 1, element.firstChild.data);

})
elementsList = elementsList.join(' ');
console.log(elementsList);
