const findPoly = function (firstWord) {
    return reverseWord = firstWord.split('').reverse().join('');
}
let polyWord = '';
 reverseWord = findPoly(polyWord);
console.log(polyWord);
console.log(reverseWord);

if (polyWord === reverseWord) {
    console.log('Слово является палиндромом');
} else {
    console.log('слово не является палиндромом');
}