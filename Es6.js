// ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript, making the language more powerful and easier to work with.
//Template string//
/*template literals (also known as template strings) are a type of string that allows embedded expressions, making it easier
 to create strings with dynamic content. Unlike regular strings, which are enclosed by single ('...') or double quotes ("..."),
  template literals are enclosed by backticks (`...`)*/


//syntax:-let templateLiteral = `string text ${expression}`;

//Regular String (without template literals):
/*let a2= "xyz" ;
let b = 23;
let c1 = "Hello, my name is " + a2 + " and I am " + b + " years old.";

console.log(introduction);
// Output: Hello, my name is xyz and I am 23 years old.*/


//Template Literal:
let t2 = "ram";
let age = 23;
let c= `Hello, my name is ${t2} and I am ${age} years old.`;

console.log(c);
// Output: Hello, my name is ram and I am 23 years old.


//Multiline Template Literal:
let message = `This is a 
multiline string
in JavaScript.`;

console.log(message);
// Output: 
// This is a 
// multiline string
// in JavaScript.




let x1 = "John";
let y2 = new String("John");
x1==y2;//true coz it chek only value
x1===y2;//false coz both are diffr datatype it hase same vakue but dif datatype like first is string and second is object data type


//(x == y) true or false?

let x = new String("John");
let y = new String("John");
x==y;//false js object can not compared
x===y;//false same here
