const sum= function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
x=sum(2)(5)(10);
alert(x);