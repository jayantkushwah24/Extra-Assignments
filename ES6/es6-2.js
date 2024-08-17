//------------------------- q1--------------------------------
function eligibleToVote(age) {
    if (age >= 18) {
      console.log("Eligible for vote");
    } else {
      console.log("Not eligible for vote");
    }
  }
  // eligibleToVote(18);
  
  // ----------------------q2------------------------------------
  function whoIsGreater(a, b) {
    if (a > b) {
      console.log(`${a} is greater than ${b}`);
    } else {
      console.log(`${b} is greater than ${a}`);
    }
  }
  // whoIsGreater(18, 20);
  
  //------------------------q3------------------------
  function positiveOrNegative(number) {
    if (number >= 0) {
      console.log(`${number} is a positive number.`);
    } else {
      console.log(`${number} is a negative number.`);
    }
  }
  // positiveOrNegative(10);
  
  //-----------------------q4------------------------
  function oddOrEven(number) {
    if (number % 2 === 0) {
      console.log("Even Number");
    } else {
      console.log("Odd Number");
    }
  }
  // oddOrEven(101);
  
  //-----------------------q5------------------------
  function checkForAlphabetA(name) {
    if (name.includes("a")) {
      console.log("It contains");
    } else {
      console.log("It does not contain");
    }
  }
  // checkForAlphabetA("jayant");
  
  //-----------------------q6------------------------
  function checkLength(name) {
    if (name.length > 5) {
      console.log("Greater than 5 characters");
    } else {
      console.log("Not greater than 5 characters");
    }
  }
  // checkLength("jayant");
  
  //---------------------q7 ---------------------------------
  function isBetweenOneAndTen(number) {
    if (number >= 1 && number <= 10) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  // isBetweenOneAndTen(61);
  
  //-----------------------------q8---------------------------------------------------------------------
  // Write a function that takes a string as input and determines if it contains the word "hello".
  function isHelloPresent(word) {
    if (word.includes("Hello")) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(isHelloPresent("Hello World")); // true
  // console.log(isHelloPresent("World")); // false
  
  //------------------------------------------------------------------------------------------------
  // 9. Write a function that takes a number as input and determines if it is a multiple of 3.
  function multipleOfThree(number) {
    if (number % 3 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  // multipleOfThree(241);
  
  //--------------------------------------------------------------------------------------------------
  // 10. Write a function which takes in a number as input and returns it after multiplying by 10.
  function multipleOfTen(number) {
    if (number % 10 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  // multipleOfTen(2410);
  
  //--------------------------------------------------------------------------------------------------------
  // 11. Console individual values of the product object using object destructuring.
  const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple",
  };
  const { title, price, description } = product;
  // console.log(title); // iPhone
  // console.log(price); // 5999
  // console.log(description); // The iPhone is a smartphone developed by Apple
  
  //--------------------------------------------------------------------------------------------------------
  // 12. Create an object book with properties title, author, and pages. Create a function getBookDetails
  // that takes a book object as a parameter and returns if the book has more than 100 pages.
  const book = {
    title: "harray potter",
    author: "jk rowling",
    pages: 300,
  };
  function getBookDetails(book) {
    if (book.pages > 100) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
  
  //--------------------------------------------------------------------------------------------------------------------
  // 13. Create a function changeOccupation that takes an object person and a string newOccupation as
  // parameters, and changes the occupation property of the person object to the newOccupation.
  // Log the person object to the console before and after calling the function.
  const person = {
    name: "Jayant",
    age: 24,
    occupation: "Software Engineer",
  };
  function changeOccupation(person, newOccupation) {
    person.occupation = newOccupation;
  }
  // console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to
  // changeOccupation(person, "Product Manager");
  // console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' }
  
  //--------------------------------------------------------------------------------------------------------------------------------
  // 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each
  // number to the console.
  const numbers = [1, 2, 3];
  const [a, b, c] = numbers;
  console.log(a); // logs 1 to the console
  console.log(b); // logs 2 to the console
  console.log(c); // logs 3 to the console
  
  //--------------------------------------------------------------------------------------------------------------------------------
  // 15. Convert the given function into ES6 with least amount of characters.
  // function defaultParamsFunc(a, b, c) {
  //  if (c === undefined) {
  //  c = 4
  //  }
  //  return a * b * c
  // }
  const defaultParamsFunc = (a, b, c = 4) => a * b * c;
  console.log(defaultParamsFunc(3, 1)); // 12
  console.log(defaultParamsFunc(3, 10)); // 120
  