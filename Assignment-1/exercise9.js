// 9. Write an ES6 function that takes two strings as input and determines if they are the same or not.

const areStringsEqual = (str1, str2) => {
  // Your ES6 code here
  return str1 === str2;
};

console.log(areStringsEqual("Apple", "Apple")); // true
console.log(areStringsEqual("Apple", "apple")); // false
console.log(areStringsEqual("Papaya", "Watermelon")); // false
