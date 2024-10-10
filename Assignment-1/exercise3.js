// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

const reverseString = (str) => {
  // Your ES6 code here
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log(reverseString("jayant kushwah"));
