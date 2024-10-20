// 5. Write an ES6 function that takes in an array of numbers and returns
// the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.

const sumOfEvenNumbers = (arr) => {
  // Your ES6+ code here
  let answer = (arr ?? [])
    .filter((num) => num % 2 == 0)
    .reduce((acc, value) => acc + value, 0);
  return answer;
};

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0
