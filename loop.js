/* a for loop is used to repeatedly execute a block of code a set number of times.
 It consists of three parts: initialization, condition, and increment/decrement.
 The loop will continue to execute as long as the condition evaluates to true.*/

 //Print numbers from 0 to 4
 for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // Output: 0 1 2 3 4

  

  //Print even numbers between 0 and 10
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  // Output: 0 2 4 6 8 10

  
// Sum numbers from 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // Output: 15


//Reverse iteration (from 5 to 1)
for (let i = 5; i >= 1; i--) {
    console.log(i);
  }
  // Output: 5 4 3 2 1

  
  //Loop through an array
  let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: apple banana cherry




/*while loop :-while loop repeatedly executes a block of code as long as a specified 
condition evaluates to true. The condition is evaluated before each iteration,
 so if the condition is false initially, the loop will not execute.*/


 let t = 0;
while (t < 5) {
  console.log(t);
  t++;
}
// Output: 0 1 2 3 4



let t1 = 0;
while (t1 < 10) {
  if (i === 5) break; // breaks the loop when i equals 5
  console.log(t1);
  t1++;
}
// Output: 0 1 2 3 4




let c1 = 0;
while (true) {
  if (c1 === 3) break; // breaks the loop after 3 iterations
  console.log(c1);
  c1++;
}
// Output: 0 1 2



let userInput;
while (userInput !== 'exit') {
  userInput = prompt("Enter 'exit' to stop the loop:");
  console.log("You entered:", userInput);
}
// This loop will continue until the user enters 'exit'.



/* do...while loop in JavaScript executes a block of code at least once and then repeats 
the loop as long as a specified condition is true. It is similar to the while loop, but with 
the key difference that the do...while loop checks
 the condition after executing the code block, ensuring the code is run at least once.*/


 let s1 = 1;
do {
  console.log(s1);
  s1++;
} while (s1 <= 5);



let count = 6;
do {
  console.log(count);
  count++;
} while (count <= 5); //output:-6



let count2 = 1;
do {
  if (count2 === 4) {
    break;  // Exit the loop if count is 4
  }
  console.log(count2);
  count2++;
} while (count2 <= 5); //output:-1,2,3



/*for...in loop in JavaScript is used to iterate over the properties of an object or elements in an array 
(though it's typically used for objects). Here are five examples of how the for...in loop
Iterating Over Object Properties*/

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York


// Iterating Over an Array (Indexes)
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index + ': ' + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue



//: Checking Property Inheritance
const car = {
    brand: 'Toyota',
    model: 'Corolla'
  };
  
  const details = Object.create(car);
  details.year = 2020;
  
  for (let key in details) {
    if (details.hasOwnProperty(key)) {
      console.log(key + ': ' + details[key]);
    }
  }
  // Output:
  // year: 2020


  //Iterating Over an Array with Conditional Logic
  const numbers = [10, 20, 30, 40, 50];

for (let index in numbers) {
  if (numbers[index] > 30) {
    console.log('Number greater than 30: ' + numbers[index]);
  }
}
// Output:
// Number greater than 30: 40
// Number greater than 30: 50


/*for...of loop in JavaScript is used to iterate over iterable objects (such as arrays
, strings, maps, sets, etc.) and allows you to access each element in the sequence directly. 
It simplifies the process of accessing elements compared to traditional for loops*/

//Iterating over an Array:

const h1 = ['apple', 'banana', 'cherry'];

for (const fruit of h1) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

  