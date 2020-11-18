var c = [0];
var sequence = function (a, b) {
    let x = parseInt(c);
    if (x < a) {
        x = a;
    }
    x += b;
    c.splice(0, 1, x);
    return c;
}
// var generator=sequence(10,3);
// alert(generator());
// alert(generator());

alert(sequence(10,3));
alert(sequence(10,3));

