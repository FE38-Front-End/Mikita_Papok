let a=[];
let b=[];
let c=[];
for(let i=0; i<=9;i++){
    a.push(Math.floor(Math.random()*(100-0+1)+0));
}
a.forEach(Element=>{
        Element=Element.toString();
         Element=Element.replace('0','zero');
        b.push(Element);
})
b.forEach(Element=>{
    Element=Element.toString();
     Element=Element.replace('0','zero');
     if(!Element.includes('zero')){
            Element=parseInt(Element);
     }
    c.push(Element);

})

console.log(c);
