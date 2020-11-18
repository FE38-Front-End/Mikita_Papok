var c = [0];
function sequence(a, b) {
    let x = parseInt(c);
    if (x < a) {
        x = a;
    }
    return function () {
        x += b;
        c.splice(0, 1, x);
        return c;
    }
}
var generator = sequence(10, 3);
alert(generator());
alert(generator());
alert(generator());