// section 1: Immutability
// understanding
// Do not change any data; always return a new copy
// In JavaScript, function arguments are references to actual data
// 1. Take an object with your mother’s name and your age. Now create an object for your sibling by
// age difference.
const jayant = {mother: "hemlata", age:24};
const dishika = {...jayant , age : jayant.age - 8};
// console.log(dishika);

// 2. Take an array with 5 colours. Create another array by adding 2 more colours to it.
const fiveColors = ["white","black","gray","brown","red"];
const sevenColors = [...fiveColors,"yellow","green"];
// console.log(fiveColors);
// console.log(sevenColors);

// section 2: Pure functions
// understanding
// For the same input, the output will always be the same
// Three rules
// 1. At least one argument
// 2. return a value or other function
// 3. Should not mutate any of its arguments —> Make a new copy
// challenge
// 1. Write a function birthday() to take a person’s name and age in an object and then increase the
// age by 1. Return the updated object
const birthday = (name,age) => `person's name is ${name} and now age is ${age+1}`
console.log(birthday("jayant",24));

// 1. Write an ES6 function increaseStock() to take a products’s name and quantity in an object and
// then increase the quantity by 5.
const increaseStock = ({name , quantity}) => `product's name is ${name} and quantity after increased by 5 is ${quantity+5}`;
// console.log(increaseStock({name : "macbook" , quantity : 1})); 



// section 2: Most used utility functions
// understanding
// Can take functions as arguments
// Return Functions
// Or both
// exercise 01: map
// 1. Given an array of numbers, return a new array with square root of each number in it
const numbers = [1,4,9,16,25];
const squareRoot = numbers.map( (n) => Math.sqrt(n));
// console.log(squareRoot);

// 1. Write an ES6 function that takes an array of numbers and returns an array with the square of
// each element using the map method.
const square = (num) => num.map( (n) => n*n);
const number = [1,2,3,4,5];
// console.log(square(number));

// 2. Write an ES6 function that takes an array of strings and returns an array with the length of each
// string using the map method.
const lengthOfString = (str) => str.map( (s) => s.length);
const arrayString = ["jayant","kushwah","kirti","dishika","devendra","hemlata"];
// console.log(lengthOfString(arrayString));

