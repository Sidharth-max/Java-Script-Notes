/* scope refers to the accessibility or visibility of variables, functions,
 and objects in a program. Scope determines where these entities can be accessed or modified.*/

//Types of Scope in JavaScript:
//Global Scope
//Variables declared outside any function or block belong to the global scope and can be accessed anywhere in the code.
var globalVar = "I'm global";
function displayGlobal() {
    console.log(globalVar); // Accessible
}
displayGlobal();
console.log(globalVar); // Accessible




//Function Scope
//Variables declared inside a function are accessible only within that function.
function greet() {
    var message = "Hello, Function Scope!";
    console.log(message); // Accessible
}
greet();
console.log(message); // Error: message is not defined



//Block Scope
//Variables declared with let or const inside a block (e.g., {}) are accessible only within that block.
{
    let blockVar = "I'm block scoped";
    console.log(blockVar); // Accessible
}
console.log(blockVar); // Error: blockVar is not defined



//Lexical Scope
//Inner functions have access to variables defined in their outer (parent) function due to the closure principle
function outer() {
    let outerVar = "I'm from the outer function";
    function inner() {
        console.log(outerVar); // Accessible
    }
    inner();
}
outer();

