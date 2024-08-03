// Syntax and Operators

// Variables (let, const, var)

// let name = 'John'; // prefer to use
// const age = 30;  // for constant and it is not change
// var isStudent = true; // it has not globle scope

// (2)
// Data types:

// let number = 42;           // Number
// let text = "Hello";        // String
// let isTrue = false;        // Boolean
// let nothing = null;        // Null
// let notDefined;            // Undefined
// let unique = Symbol();     // Symbol
// let person = {name: "John", age: 30}; // Object

// (3)
// Arithmetic operators: Perform mathematical operations.

// let sum = 5 + 3;       // 8
// let product = 4 * 2;   // 8

// (4)
// Comparison operators: Compare values and return a boolean
// 5 > 3;   // true
// 5 == '5'; // true (type coercion)
// 5 === '5'; // false (strict equality)

// (5)
// Logical operators: Combine boolean values
// true && false; // false
// true && true   // true
// true || false; // true
// !true;         // false

// (6)
// Assignment operators: Assign values to variables
// let x = 10;
// x += 5; // x = x + 5; // 15

// (7)
// Ternary operator: Shortens an if-else statement.
// let age = 18;
// let canVote = (age >= 18) ? 'Yes' : 'No'; // 'Yes'

// (8)
// Template literals: Allow embedded expressions and multi-line strings
// let name = "John";
// let greeting = `Hello, ${name}!`; // "Hello, John!"

// (9)
// Conditional statements: Execute code based on conditions.

// if (age >= 18) {
//   console.log('Adult');
// } else if (age > 12) {
//   console.log('Teenager');
// } else {
//   console.log('Child');
// }

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   default:
//     console.log('Another day');
// }

// (10)
// Loops: Repeat a block of code multiple times
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }

// let j = 0;
// while (j < 5) {
//   console.log(j); // 0, 1, 2, 3, 4
//   j++;
// }

// let k = 0;
// do {
//   console.log(k); // 0, 1, 2, 3, 4
//   k++;
// } while (k < 5);

// let obj = {a: 1, b: 2, c: 3};
// for (let key in obj) {
//   console.log(key); // a, b, c
// }

// let arr = [1, 2, 3];
// for (let value of arr) {
//   console.log(value); // 1, 2, 3
// }

// (11)
// Break and continue statements: Control loop execution
// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;    // Exit the loop
//   if (i % 2 === 0) continue; // Skip even numbers
//   console.log(i); // 1, 3
// }

// (12)
// Function declarations and expressions: Define reusable blocks of code.
// function greet(name) {
//   return `Hello, ${name}`;
// }

// const sayGoodbye = function(name) {
//   return `Goodbye, ${name}`;
// };

// (13)
// Arrow functions: Shorter syntax for functions.
// const add = (a, b) => a + b;

// (14)
// Anonymous functions: Functions without a name.
// setTimeout(function() {
//   console.log('Hello');
// }, 1000);

// (15)
// Callback functions: Functions passed as arguments.
// function processUserInput(callback) {
//   let name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(function(name) {
//   alert('Hello ' + name);
// });

// console.log(processUserInput);

// (15)
// Closures: Functions that remember their lexical scope.
// function makeCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// (16)
// Objects and Arrays

// let person = {
//   name: 'John',
//   age: 30
// };

// person.name = 'Jane';
// person['age'] = 25;

// let keys = Object.keys(person); // ["name", "age"]
// let values = Object.values(person); // ["Jane", 25]
// let entries = Object.entries(person); // [["name", "Jane"], ["age", 25]]

// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
// let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
// let sum = numbers.reduce((acc, num) => acc + num, 0); // 15
// numbers.forEach(num => console.log(num)); // 1, 2, 3, 4, 5
// let firstEven = numbers.find(num => num % 2 === 0); // 2
// let firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { user: 'John', age: 30 };
//     callback(data);
//   }, 1000);
// }

// fetchData(function(data) {
//   console.log('Data received:', data);
// });

// promises

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { user: "John", age: 30 };
//       resolve(data);
//     }, 5000);
//   });
// }
//  fetchData()
// .then( data => {
//   console.log('Data received:', data);
// })
// .catch( error => {
//   console.error('Error:', error);
// })

// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log('Data received:', data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getData();

// getting data from API

// async function getDataFromApi() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     if (!response.ok) {
//       throw new Error(`Network response was not ok`);
//     }
//     const data = await response.json();
//     console.log("Data received:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getDataFromApi();
