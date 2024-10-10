// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

const getOddNumbers = (numArray) => {
  // Your ES6 code here
  const oddNum = numArray.filter((num) => num % 2 !== 0);
  return oddNum;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
