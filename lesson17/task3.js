let a = [];
let b = [];
let c = [];
const randArr2 = function (min, max) {
    for (let i = 0; i <= 9; i++) {
        a.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
}
randArr2(0, 100);

a.forEach(Element => {
    Element = Element.toString();
    Element = Element.replace('0', 'zero');
    b.push(Element);
})
b.forEach(Element => {
    Element = Element.toString();
    Element = Element.replace('0', 'zero');
    if (!Element.includes('zero')) {
        Element = parseInt(Element);
    }
    c.push(Element);

})
console.log(c);