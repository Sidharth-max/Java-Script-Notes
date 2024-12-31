/*Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top
 of their containing scope during the compilation phase, before the code execution. 
This allows variables and functions to be used in the code before they are declared.*/

//Variable Hoisting with var:
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10


//Function Declaration Hoisting:
greet(); // Output: "Hello, World!"

function greet() {
  console.log("Hello, World!");
}


//Variable Hoisting with let and const:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;



//Function Expression Hoisting:
console.log(typeof myFunc); // Output: undefined
var myFunc = function() {
  console.log("This is a function expression.");
};



//Class Declaration Hoisting:
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = 'Example';
  }
}




//immediate Invocation of Function Expressions (IIFE) and Hoisting:
(function() {
  console.log(c); // Output: undefined
  var c = 30;
})();