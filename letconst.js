/*let:

Introduced in ES6, let allows you to declare block-scoped variables.
The variable declared with let can be reassigned but cannot be redeclared within the same scope.
const:
Also introduced in ES6, const is used to declare block-scoped constants.
A variable declared with const must be initialized during declaration and cannot be reassigned, though its
 properties (if it's an object or array) can be modified.

 different:
 var /let/const
 Function-scoped	Block-scoped	Block-scoped
 redeclare Allowed	             Not allowed in the same scope     	Not allowed in the same scope
 reassign r Allowed             	Allowed	                         Not allowed
Hoisted with undefined value	  Hoisted but not initialized	  Hoisted but not initializ*/



// EX:- scope
function testVarLetConst() {
    if (true) {
        var x = 10; // Function-scoped
        let y = 20; // Block-scoped
        const z = 30; // Block-scoped
    }
    console.log(x); // 10 (accessible)
    // console.log(y); // Error: y is not defined
    // console.log(z); // Error: z is not defined
}
testVarLetConst();





//Redeclaration:

var a = 1;
var a = 2; // No error with var

let b = 1;
// let b = 2; // Error: Identifier 'b' has already been declared

const c = 1;
// const c = 2; // Error: Identifier 'c' has already been declared



// Reassignment:
var x = 10;
x = 20; // Allowed

let y = 30;
y = 40; // Allowed

const z = 50;
// z = 60; // Error: Assignment to constant variable




//Hoisting:
console.log(a); // undefined (var is hoisted)
var a = 10;

// console.log(b); // Error: Cannot access 'b' before initialization
let b1 = 20;

// console.log(c); // Error: Cannot access 'c' before initialization
const c1 = 30;
