/*Default parameters in JavaScript allow functions to use default values for parameters if no value or undefined is passed. Here's a concise definition with five short code examples:
Default parameters: Allow a function parameter to have a predefined value if not provided or explicitly set to undefined*/
//Simple Default Parameter:
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Akash"); // Hello, Akash!
//Default for Math Operations:
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add()); // 0
console.log(add(5)); // 5