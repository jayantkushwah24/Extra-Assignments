// 1. Given an array of objects representing people, write an ES6 function to return a new array
// containing only the names of the people.
const people = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];
let names = people.map((p) => p.name);
// console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

// 2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.
const numbers = [1, 2, 3, 4];
const multiplyByFive = numbers.map((n) => n * 5);
// console.log(multiplyByFive); // Output: [5, 10, 15, 20]

// 3. Given employee’s data, write an ES6 function which greets them with a personalized message
// for onboarding.
const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];
const greetEmployeeMessages = employeeData.map(
  (e) => `'Hi ${e.name} we are glad to have you as a ${e.dept}`
);
// console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE

// 4. Write an ES6 function that takes an array of objects representing books and returns an array
// with only the titles of each book.
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];
const getBookTitles = (books) => books.map((b) => b.title);
const titles = getBookTitles(books);
// console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pr

// 5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
const studentNames = studentName.filter((s) => s[0] == "A");
// console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

// 6. Write an ES6 function which filters out the products which have a price greater than 40.
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
const getProducts = (productData, price) =>
  productData.filter((p) => p.price > 40);
// console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

// 7. Write an ES6 function that takes an array of numbers and returns the first number that is
// divisible by 7.
const numbers1 = [1, 2, 3, 21, 14, 7];
const isDivisibleBy7 = numbers1.find((n) => n % 7 == 0);
// console.log(isDivisibleBy7);
// Output: 21

// 8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.
const names2 = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
];
const isNamesGreaterThan8 = (names2) => names2.find((n) => n.length > 8);
// console.log(isNamesGreaterThan8(names2));
// Output: "Geetanjali"

// 9. Write an ES6 function that takes an array of objects representing students with properties name
// and grade. Return the first student object that has a grade of "A".
const students1 = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];
const findStudentWithGradeA = (students1) =>
  students1.find((s) => s.grade == "A");
const studentWithGradeA = findStudentWithGradeA(students1);
// console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

// 10. Write an ES6 function that takes an array of objects representing students with properties name,
// grade and scholarship. Return the first student object that has a grade of "A" or they are a
// scholarship student.
const students2 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];
const findStudent1 = (student2) =>
  student2.find((s) => s.grade == "A" || s.scholarship == true);
const student1 = findStudent1(students2);
// console.log(student1);
// Output: { name: "Mary", grade: "B", scholarship: true }

// 11. Write an ES6 function that takes an array of objects representing students with properties name
// and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.
const students3 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];
const findStudent = (students3) =>
  students3.find((s) => s.grade == "B" && s.scholarship == true);
const student = findStudent(students3);
// console.log(student);
// Output: { name: "Sarah", grade: "B", scholarship: true }

// 12. Write an ES6 function that takes an array of objects containing Bollywood movie information
// (title, director, year, rating) and returns an array with only the movie titles that were made before
// 1990 and has a rating above 8.0. (Question Level: tough)
const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];
const getBestOldBollywoodMovies = (bollywoodMovies) =>
  bollywoodMovies.filter((b) => b.year < 1990 && b.rating > 8.0).map( n => n.title);
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
// console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']
