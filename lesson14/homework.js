const data = [
    {firstName: 'Ashton',lastName: 'Kutcher',age: 40 },
    {firstName: 'Bradley', lastName: 'Pitt',age: 54},
    {firstName: 'Hannah', lastName: 'Dakota',age: 24}
  ];

const b = {lastName: prompt("Введите фамилию")};
let a ;
for (i of data){
   for (let key in i){
     a = i.lastName.toUpperCase();
     break;
   };
   if (b.lastName.toUpperCase() === a){     
     break;
   }else{      
     continue;
   }   
};
 
if (b.lastName.toUpperCase() === a){
  console.log(`user name: ${i.firstName}
     user age: ${i.age}`);}else{
  console.log('No results found for your request');
}
  