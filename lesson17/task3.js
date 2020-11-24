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
    Element = Element.toString().split('').join('');
    Element = Element.replace('0', 'zero');
       do{ Element = Element.replace('0', 'zero');
    }while(Element.includes(0));
        if (!Element.includes('zero')) {
        Element = parseInt(Element);
    }
    b.push(Element);
});
console.log(b);