// Exercise 1
// Write a function declaration
function someFunc() {
   //code to run goes here
}

function area(width, height) {
   console.log(width * height);
}

// Write a function expression
const a = (width, height) => {
   console.log(width * height);
}

const something = function() {
   //code to run goes here
}

// Write a function using an "arrow" function
const multiply = (number1, number2) => {
   console.log(number1 * number2);
}

// Create a function that will take 2 numbers and log the sum of the 2 numbers
function sum(num1, num2) {
   console.log(num1 + num2);
}

const add = (num1, num2) => {
   console.log(num1 + num2);
}

add(2,3)
sum(2,3)

// Create a function that takes in a number and logs from 0 to whatever number that is passed in
function counts(num) {
   for (let i = 0; i <= num; i++) {
      console.log(i);
   }
}

counts(20)

function logger(someNumber) {
   for (let i = 0; i <= someNumber; i++) {
       console.log(i);
   }
}

// count in reverse
const consoleLogger = (someNumber) => {
   for (let i = someNumber; i >= 0; i--) {
       console.log(i);
   }
}

logger(6)
consoleLogger(6)

// Create a function that takes in a number and logs if it is even or not

function isEven(number) {
   if (number % 2 === 0) {
      console.log(number + " is even")
   } else 
      console.log(number + " is odd")
}

isEven(2)
isEven(9)