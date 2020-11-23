var findPoly = function (firstWord) {
    reverseWord = firstWord.split('');
    reverseWord = reverseWord.reverse();
    return reverseWord.join('');
}

polyWord = '';
var reverseWord = findPoly(polyWord);
console.log(polyWord);
console.log(reverseWord);

if (polyWord === reverseWord) {
    console.log('Слово является палиндромом');
} else {
    console.log('слово не является палиндромом');
}