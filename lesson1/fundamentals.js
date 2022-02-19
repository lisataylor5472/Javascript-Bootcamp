// Exercise 1
let realName = "Bruce Wayne";
let superName = "Batman";
let age = 35;
let home = "Gotham";

console.log("My name is " + realName);
console.log("My age is " + age);

realName = "Clark Kent";
superName = "Superman";
age = 32;
home = "Metropolis";
daysInYear = 365 
// **Conventions**
//    1. Should be “camel case”
// 	2. No dashes, no periods, no weird symbols. Just letters and numbers.
// 	3. Cannot start with a number
// 	4. Case sensitive - numberofstudents is not the same as numberOfStudents
// 	5. Name should be descriptive 
console.log("My name is " + realName);
console.log("My name is " + realName + " My age is " + age);
console.log("My name is ", realName);
console.log("My name is ", realName, " My age is ", age);
console.log("Age in days: " + age * daysInYear);

// Exercise 2
let firstName = "Han"
let lastName = "Solo"
fullName = firstName + " " + lastName
console.log(fullName)

// Exercise 3
let funAmount = 8
console.log(funAmount)
funAmount += 2 
console.log(funAmount)
funAmount -= 2 
console.log(funAmount)
console.log(funAmount + 5) // this will not change the variable - temporary value 
console.log(funAmount)

// Exercise 4
// Write an if statement that will log the text "That is far!"
// if the "distance" variable is greater than 25
let distance = 27;

if (distance > 25) { 
   console.log("That is far!");
}

// Write an if statement that will log "Small", "Medium", or "Large"
// based on the "size" variable value, "s" should log the word "Small"
let size = 's';

if (size === 's') {
   console.log("Small");
} else if (size === 'm') {
   console.log("Medium");
} else if (size === 'l') {
   console.log("Large");
} else {
   console.log("Please provide a size");
}

// Write an if statement that checks 
// if the value of "jerseyNumber" is equal to 23 AND "jerseyColor" equal to "yellow"
// log "LeBron James" if true
let jerseyNumber = 23;
let jerseyColor = "yellow";

if (jerseyNumber === 23 && jerseyColor === "yellow") {
   console.log("LeBron James");
}

// Write an if statement that checks
// if the variable "someNum" is less than 0 OR greater than 100
// log stating whether the value meets criteria or not
let someNum = 150 

if (someNum < 0 || someNum > 100) {
   console.log("Is not between 0-100");
}