// 1. Write an ES6 function that takes an array of objects representing cars with properties make,
// model, and year. Return the first car object that is a Toyota and the year is after 2010.
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];
const findToyotaCar = (cars) =>
  cars.find((c) => c.make == "Toyota" && c.year > 2010);
const toyotaCar = findToyotaCar(cars);
//    console.log(toyotaCar)
// Output: { make: "Toyota", model: "Camry", year: 2015 }

// 2. Write an ES6 function that takes an array of objects containing car information (make, model,
// year) and returns an array with only the cars that were made after the year 2012.
const cars1 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];
const getCarDetails = (cars1) => cars1.filter((c) => c.year > 2012);
const getCars = getCarDetails(cars1);
// console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Musta

// 3. Write an ES6 function that takes an array of objects representing products with properties name,
// price, and category. Return the first product object that is in the category "electronics".
const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];
const findElectronicsProduct = (products) =>
  products.find((p) => p.category == "electronics");
const electronicsProduct = findElectronicsProduct(products);
// console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

// 4. Write an ES6 function that takes an array of objects representing products with properties name,
// price and category. Return all the products object that are in the category "electronics".
const products1 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];
const getAllElectronicProducts = (products1) =>
  products1.filter((p) => p.category == "electronics");
const electronicProducts = getAllElectronicProducts(products1);
// console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch",

// 5. Write an ES6 function that takes an array of objects containing student information (name, age,
// grade) and returns an array with only the students who have a grade above a certain value.
const students2 = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];
const filterStudentsByGrade = (students2) =>
  students2.filter((s) => s.grade >= 90);
const highGradeStudents = filterStudentsByGrade(students2, 85);
// console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95

// 6. Write an ES6 function that takes an array of objects representing books with properties title,
// author and pageCount. Return the first book object that has more than 500 pages.
const books2 = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];
const findBookWithMoreThan500Pages = (books2) =>
  books2.find((b) => b.pageCount > 500);
const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books2);
// console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

// 7. Write an ES6 function that takes an array of objects containing customer information (name,
// age, gender) and returns an array with only the customers who are of gender Male.
const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];
const getMaleCustomers = (customers) =>
  customers.filter((c) => c.gender == "Male");
const maleCustomers = getMaleCustomers(customers);
// console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'M

// 8. Write an ES6 function that takes an array of objects containing game information (title,
// developer, genre) and returns an array with all the games of a certain genre.
const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  {
    title: "Grand Theft Auto V",
    developer: "Rockstar North",
    genre: "Action",
  },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
const filterByGenre = (games) => games.filter((g) => g.genre == "RPG");
const filteredGames = filterByGenre(games, "RPG");
// console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"

// 9. Write an ES6 function that takes an array of objects containing car information (make, model,
// year) and returns an array with only the car model that were made after the year 2012.
const cars2 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];
const getCarModel = (cars2) =>
  cars2.filter((c) => c.year > 2012).map((m) => m.model);
const carModels = getCarModel(cars2);
// console.log(carModels);
// Output: ["Camry", "Mustang"]

// 10. Write an ES6 function that takes an array of objects representing books with properties title,
// author and pageCount. Return the all book titles that have more than 700 pages.
const books1 = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];
const getTitlesWithMoreThan700Pages = (books1) =>
  books1.filter((b) => b.pageCount > 700).map((t) => t.title);
const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books1);
// console.log(booksWithMoreThan700Pages);
// Output: ["The Lord of the Rings"]

// 11. Write an ES6 function that takes an array of numbers and returns the sum of all the even
// numbers in the array using the reduce function.
const numbers1 = [12, 23, 4, 2, 11, 21];
const sumOfEvenNumbers = (numbers1) =>
  numbers1.filter((n) => n % 2 == 0).reduce((prev, sum) => prev + sum, 0);
// console.log(sumOfEvenNumbers(numbers1));
// Output: 18

// 12. Write an ES6 function that takes an array of objects representing students with properties name
// and score, and returns the average score of all the students using the reduce function.
const students1 = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];
const getAverageScore = (students1) =>
  students1.reduce((prev, acc) => prev + acc.score / students1.length, 0);
// console.log(getAverageScore(students1));
// Output: 82.5

// 13. Write an ES6 function that takes an array of objects representing products with properties name,
// price, and quantity, and returns the total cost of all the products using the reduce function.
const products2 = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];
const getTotalCost = (products2) =>
  products2.reduce((prev, acc) => acc.price * acc.quantity + prev, 0);
// console.log(getTotalCost(products2));
// Output: 150

// 14. Write an ES6 function that takes an array of strings and returns a single string that is the
// concatenation of all the strings using the reduce function.
const strings = ["Hello", " ", "world", "!"];
const concatenateStrings = (strings) =>
  strings.reduce((prev, acc) => prev + acc, "");
// console.log(concatenateStrings(strings));
// Output: "Hello world!"

// 15. Write an ES6 function that takes an array of numbers and returns the minimum number using
// the reduce function.
const numbers = [10, 5, 8, 3, 6];
const getMinimumNumber = (numbers) =>
  numbers.reduce((prev, acc) => (prev > acc ? acc : prev), numbers[0]);
// console.log(getMinimumNumber(numbers));
// Output: 3
