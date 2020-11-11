const data = [
    {firstName: 'Ashton',lastName: 'Kutcher',age: 40},
    {firstName: 'Bradley', lastName: 'Pitt',age: 54},
    {firstName: 'Hannah', lastName: 'Dakota',age: 24}
  ];
//   let b=[];
//    for (i in users){
//     b.push(users[i]);

//  }
//   for(i in b){
//       b[i].firstName.toUpperCase();
//       b[i].lastName.toUpperCase();
      
//   }
//   console.log

 
   let x = prompt("Введите фамилию").toUpperCase(); 
    let a = data.find(element => element.lastName.toUpperCase()===x);
    let b = Boolean(a);
    if (b ===true){
  console.log(`user name: ${a.firstName}
  user age: ${a.age}`);}else{console.log('No results found for your request')};