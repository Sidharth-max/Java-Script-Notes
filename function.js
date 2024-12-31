//A function in JavaScript is a reusable block of code designed to perform a particular task
//Syntax for Defining a Function
//function functionName(parameters) {
    // Function body
    // Code to be executed
   // return value; // Optional
//}


//Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}

// Calling the function
console.log(addNumbers(5, 10)); // Output: 15


// Function Without Parameters
function greet() {
    console.log("Hello, World!");
}

// Calling the function
greet(); // Output: Hello, World!



//Function with Default Parameters
function multiply(a, b = 1) {
    return a * b;
}

// Calling the function
console.log(multiply(5));     // Output: 5 (b defaults to 1)
console.log(multiply(5, 3));  // Output: 15



//An anonymous function is a function without a name. These functions are often used when a function is needed temporarily as an argument
//Advantages of Anonymous Functions
//Reduced Memory Overhead: Used only when required, not stored permanently.

// Anonymous Function in a Variable
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8


//Returning an Anonymous Function

function createMultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = createMultiplier(2);
console.log(double(10)); // Output: 20






// arrow function is a shorthand way of writing functions in JavaScript. Arrow functions provide a concise syntax 
//and behave differently in terms of how they handle the this keyword.

//Syntax:
//const functionName = (parameters) => {
  // function body
//};
/* arrow Cannot be used as a constructor (no new keyword) but normal function Can be used as a constructor (with new)*/

//Basic Arrow Function:
const greet = name => `Hello, ${name}`;
console.log(greet('John'));  // Output: Hello, John



//Arrow Function with Multiple Parameters:
const sum1 = (a, b) => a + b;
console.log(sum1(2, 3));  // Output: 5


//Arrow Function with No Parameters:
const sayHello = () => 'Hello!';
console.log(sayHello());  // Output: Hello!


//Returning Object from Arrow Function:
const createPerson = (name, age) => ({ name, age });
console.log(createPerson('Alice', 25));  // Output: { name: 'Alice', age: 25 }





//higher order function 
/*A higher-order function in JavaScript is a function that either:
Takes one or more functions as arguments, or
Returns a function as its result.

Differences from Normal Functions:
Normal Function: Operates on values or data and returns a result.
Higher-Order Function: Can accept or return other functions, adding more dynamism to how functions can be used.

Map Function: Applies a function to each element of an array.*/

const a = [1, 2, 3, 4];
const squared = a.map(x => x * x);  // Higher-order function
console.log(squared); // [1, 4, 9, 16]



//Filter Function: Filters an array based on a condition.

const p = [1, 2, 3, 4, 5];
const evens = p.filter(x => x % 2 === 0);  // Higher-order function
console.log(evens); // [2, 4]


//Reduce Function: Reduces an array to a single value based on a function.

const z = [1, 2, 3, 4];
const sum = z.reduce((acc, x) => acc + x, 0);  // Higher-order function
console.log(sum); // 10




/*An immediately invoked function expression (IIFE) is a function that is defined and executed right
 away after its creation. It is used to create a local scope, preventing variables from polluting
 the global scope, and is typically used for modularization or to avoid conflicts in code.*/

/*syntax:-
function() {
    // code to be executed
  })();*/



  /*anthor syntax

  (() => {
  // code to be executed
})();*/



/*diff from normal function 
Normal Function: A regular function is defined and can be invoked later in the code.
function normalFunction() {
  console.log('This is a normal function');
}
normalFunction();  // Invoked later


 An IIFE is defined and immediately invoked in the same expression
 (function() {
  console.log('This is an IIFE');
})();*/



//Basic IIFE
(function() {
    console.log('This function runs immediately');
  })();

  
  //IIFE with Parameters

  (function(name) {
    console.log('Hello, ' + name);
  })('Alice');

  
//IIFE to create a local scope
(function() {
    var localVar = 'I am local';
    console.log(localVar);  // Works fine inside the function
  })();
  // console.log(localVar); // Error: localVar is not defined

  

//IIFE with Closures
var counter = (function() {
    let count = 0;
    return {
      increment: function() {
        count++;
        console.log(count);
      },
      decrement: function() {
        count--;
        console.log(count);
      }
    };
  })();
  
  counter.increment(); // 1
  counter.increment(); // 2
  counter.decrement(); // 1
  


