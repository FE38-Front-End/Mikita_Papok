

function sum(a) {
    const innerSunm = function (b) {
        a += b;
        console.log(a);
        return innerSunm;
    }
    return innerSunm;
}
const result = sum(2)(5)(10)(15);
console.log(result());