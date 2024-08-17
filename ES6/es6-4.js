// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the
// array. Avoid using in-built methods.
let array = [4, 78, 8, 3, 6, 0, 12, 34];
const getMaxElement = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) 
        max = array[i];
  }
  return max;
};
// console.log(getMaxElement(array)); // 78


// 2. Write an ES6 function that takes an array of numbers and returns the average of all the
// numbers. Avoid using in-built methods.
const calculateAverage = (array) =>{
    let sum = 0;
    let n = array.length;
    for(let i = 0 ; i < n ; i++){
        sum += array[i];
    }
    return (sum/n);
}
// console.log(calculateAverage([1, 2, 3, 4, 5])) // 3


// 3. write an ES6 function that takes an array of numbers and converts even numbers to odd
// numbers by adding 1 to that number.
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const convertEvenToOdd = (numArr) =>{
    for(let i=0 ; i<numArr.length ; i++){
        if(numArr[i]%2 == 0){
            numArr[i] +=1;
        }
    }
    return numArr;
}
// console.log(convertEvenToOdd(numArr)); // [1, 3, 3, 5, 5, 7, 7, 9, 9]


// 4. write an ES6 function that takes an array of words and returns an array with all its elements
// whose length is greater than 5.
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community'];
const filterWords = (words) =>{
    let ans = [];
    for(let i=0 ; i<words.length ; i++){
        if (words[i].length > 5) {
            ans.push(words[i]);
        }
    }
    return ans;
}
// console.log(filterWords(words)); // ["repeat", "community"]


// 5. Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.
const capitalizeWords = (words) =>{
    let ans = [];
    for(let i=0 ; i<words.length ; i++){
        ans.push(words[i].toUpperCase());
    }
    return ans;
}
// console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
// ["EAT", "SLEEP", "CODE", "REPEAT"]


// 6. Write an ES6 function that takes an array of objects and a property name and returns a new
// array with only the values of that property. Avoid using in-built methods.
const getValues = (array) =>{
    let ans = [];
    for(let i=0 ; i<array.length ; i++){
        ans.push(array[i].name);
    }
    return ans;
}
// console.log(
//     getValues(
//         [
//             { name: 'John', age: 21 },
//             { name: 'Mary', age: 22 },
//             { name: 'Peter', age: 23 },
//         ],
//         'name',
//     ),
// ) // ["John", "Mary", "Peter"]


// 7. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid
// using in-built methods.
const userData = { firstName: 'John', lastName: 'Dee' };
const podAndTeamAllocation = (userData) =>{
    userData = {...userData , teamId : Math.floor(Math.random()*1000000)};
    return userData;
} 
// console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}


// 8. Write an ES6 function which checks if a student already has a team. If team is not given then
// add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.
const checkForTeam = (student) =>{
    if (!student.hasOwnProperty('team')) {
        student.team = 'A';
    }
    return student;
}
// console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
// {firstName: 'Penn', lastName: 'Ma', team: A}
// console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: "B" }))
// {firstName: 'John', lastName: 'Dee', team: B}
// console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
// {firstName: 'Priya', lastName: 'Raj', team: A}


// 9. Destructure the following code to get the desired outputs. Avoid using in-built methods.
const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [
    { name: 'David Flanagan', age: 49 },
    { name: 'Yukihiro Matsumoto', age: 57 },
    ],
    publisher: { name: "O'Reilly Media", location: 'CA' },
   }
   // Your ES6 code here
   const {
    title,
    authors: [
      { name: author1 },
      { name: author2 }
    ],
    publisher: { name: publisherName }
  } = book;
//    console.log(title) // JavaScript: The Definitive Guide
//    console.log(author1) // David Flanagan
//    console.log(author2) // Yukihiro Matsumoto
//    console.log(publisherName) // O'Reilly Media


// 10. Write an ES6 function that takes an array of objects and returns the sum of all ages
var array1 = [
    {
    name: 'Jay',
    age: 60,
    },
    {
    name: 'Gloria',
    age: 36,
    },
    {
    name: 'Manny',
    age: 16,
    },
    {
    name: 'Joe',
    age: 9,
    },
]
const sumOfAges = (arrObj) =>{
    let sum = 0;
    for(let i=0 ; i<arrObj.length ; i++){
        sum += arrObj[i]['age'];
    }
    return sum;
}
// console.log(sumOfAges(array1)) // 121

// ----------------Well Done! You have completed all the practice sets for ES6---------------------------------