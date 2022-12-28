const firstName = 'mocker';
const lastName = 'Locker';
// a)Merge the two word together
// b)print the first letter of firstName, lastName
// b) print the third index of each word

const names = firstName + lastName;
console.log(names); 

//or

const name1 = `${firstName}${lastName}`;
console.log(name1);


console.log(firstName[0], lastName[0]);

const indexName = firstName.indexOf('c');
 console.log(indexName);

 const indexName2 = lastName.indexOf('c');
 console.log(indexName2);