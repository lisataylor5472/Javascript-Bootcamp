// Exercise 1
// Run this portion of code and walk through the steps of each loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// i = 0, 0 < 5, 0 + 1
// i = 1, 1 < 5, 1 + 1
// i = 2, 2 < 5, 2 + 1
// i = 3, 3 < 5, 3 + 1
// i = 4, 4 < 5, 4 + 1
// i = 5, 5 < 5, STOP

// Now you try, write a for loop that will print out the numbers 1 - 100
for (let i = 1; i <= 100; i++) {
   console.log(i);
}

// Exercise 2
// Set a new variable to value of an array
let pets = ['Bloopie Lou', 'Hulk Hogan']

// Print out the third item in the array
let breakfast = ['eggs', 'milk', 'cereal', 'orange'];

console.log(breakfast[2])

// Set a new variable to the last value of the "breakfast" array
// Use the .length - 1 method to get the last item of the array
breakfast[breakfast.length - 1] = 'yogurt'
console.log(breakfast)

// Loop through the array, "breakfast", and log each value within the array
for (let i = 0; i < breakfast.length; i++) {
   console.log(breakfast[i]);
}


// Exercise 3
// Set a new variable to a vlue of an object
let address = {
   street: "500 S Broadway", 
   city: "Englewood",
   state: "CO",
   zip: 80111
};

// Print out the "color" value of the "car"
let car = {
    color: "blue", 
    hp: 123,
    year: 1999
};

console.log(car.color);

// Set a new key called "model" on the "car" object, set it with any value
car.model = "Honda";

// Print out the value you just created
console.log(car.model);

// Loop through the car object with a "for...in loop" and log each key and value
for (const items in car) {
   console.log(items, car[items])
}

for (let stuff in car) {
   console.log(stuff, car[stuff])
}



