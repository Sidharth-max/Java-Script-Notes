/*Destructuring assignment in JavaScript is a convenient way to unpack values from arrays or properties from objects into 
distinct variables. It provides a clean syntax to extract data efficiently.

Use
Extract values from arrays.
Extract properties from objects.*/


//Array Destructuring
const colors = ['red', 'green', 'blue'];
const [a, b, c] = colors;
console.log(a, b, c); // Output: red green blue


//Object Destructuring
const person = { name: 'xyz', age: 25 };
const {a1, b1 } = person;
console.log(a1, b1); // Output: xyz 25

//Default Values
const fruits = ['apple'];
const [first = 'banana', second = 'orange'] = fruits;
console.log(first, second); // Output: apple orange


//. Nested Destructuring
const u1 = { 
  info: { firstName: 'abc', lastName: 'abc2' }, 
  age: 25 
};
const { info: { firstName, lastName }, age } = u1;
console.log(firstName, lastName, age); // Output: abc abc2 25


//Destructuring Function Parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}
const user = { name: 'ram', age: 25 };
greet(user); // Output: Hello ram, you are 25 years old!
