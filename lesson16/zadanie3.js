function getGenerator(a,b){
    a -=b;
    return function(){
        a +=b;
        return a;
    }
}
const generator=getGenerator(10,3);
alert(generator());
alert(generator());
alert(generator());
