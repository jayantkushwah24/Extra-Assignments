// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

const getShortestString = (strArray) => {
  // Your ES6 code here
  let answer = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > answer) {
      answer = i;
    }
  }
  return strArray[answer];
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
