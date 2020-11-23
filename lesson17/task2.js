let arr1 = [];
for (let i = 0; i <= 6; i++) {
    let a=0;
    a=Math.random() * (10 - 0 + 1)+0;
    a= a.toFixed(2);
    arr1.push(a);  

}
for (n of arr1) {       
   if (!arr1.includes(n)){
       arr2.push(n);
   }
}
console.log(arr1);
arr1.sort( (a, b) => a - b );
console.log(arr1);