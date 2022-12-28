const numbers = [1,3,5,7,9,0];
//a) what is the length of the array
// b) print the numbers in the list
// c) calculate the sum of the numbers
/*
const result = numbers.forEach((number) =>{
    console.log('the length of the array is' ,numbers.length);
});
*/

/*
const result = numbers.forEach((number) =>{
    console.log(number);
});
*/

const result = numbers.reduce((a, b) =>{

    return a + b;
},0);

console.log(result);