// 1. Given an array, write an ES6 function that returns the total length of all the strings in an array.
const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength = (strings) =>
  strings.reduce((accu, currVal) => currVal.length + accu, 0);
// console.log(totalLength(strings));
// Output: 30

// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the
// squares of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];
const sumSquares = (numbers) =>
  numbers.reduce((acc, curr) => curr * curr + acc, 0);
// console.log(sumSquares(numbers));
// Output: 55

// 3. Write an ES6 function that calculates and returns the total value of all items in an array of
// objects.
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
const totalValue = (items) => items.reduce((acc, curr) => curr.price + acc, 0);
// console.log(totalValue(items));
// Output: 60

// 4. Write an ES6 function that takes an array of strings as input and concatenates them into a single
// string.
const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr, "");
// console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

// 5. Write an ES6 function to multiply and return all the elements of a given array.
const numbers1 = [1, 2, 3, 4, 5];
const product = (numbers1) => numbers1.reduce((acc, curr) => acc * curr, 1);
// console.log(product(numbers1)); //output 120

// 6. Write an ES6 function that takes an array of strings and returns the longest string.
const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
const longestString = (strings1) =>
  strings1.reduce((acc, curr) => (curr.length > acc.length ? curr : acc), "");
// console.log(longestString(strings1));
// Output: 'Haule Haule'

// 7. Write an ES6 function that takes an array of objects with name and age property, and returns the
// name of the oldest person.
const people1 = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
const oldestPersonName = (people1) =>
  people1.reduce(
    (acc, curr) => (curr.age > acc ? curr.name : acc.name),
    people1[0].name
  );
//   console.log(oldestPersonName(people1));
// Output: 'Naina'

// 8. Write an ES6 function that takes an array of objects representing people with properties name
// and age, and returns an object with the average age of all the people.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
const getAverageAge = (people) =>
  people.reduce((acc, curr) => acc + curr.age / people.length, 0);
//   console.log(getAverageAge(people));
// Output: { averageAge: 32.5 }

// 9. Write an ES6 function that takes an array of objects representing products with properties name,
// price, and quantity, and returns an object with the most expensive product.
const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 50 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
const findMostExpensiveProduct = (products) =>
  products.reduce(
    (acc, curr) =>
      curr.price * curr.quantity > acc.price * acc.quantity ? curr : acc,
    products[0]
  );
// console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }

// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each
// string.
const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];
const countStrings = fruits => fruits.reduce( (acc , curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
} , {})
console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
