/*Modules in JavaScript allow you to break your code into separate files or blocks, making it reusable,
 maintainable, and organized. Modules export specific pieces of code (like functions, objects, or variables) and
 import them as needed in other files.
 Advantages
Code Reusability: Code can be shared across multiple files or projects.
Maintainability: Modular code is easier to debug and update.
Encapsulation: Modules keep functionality private unless explicitly exported.
Namespace Management: Prevents naming conflicts by isolating code.
Performance Optimization: Modern browsers use lazy loading for modules.
Disadvantages
Setup Requirements: Requires a modern environment or build tools for older browsers.
Complexity: Beginners may find it difficult to understand imports/exports.
Dependency Management: Managing interdependencies can be challenging.
Compatibility: Not natively supported in older browsers without transpilers like Babel.


How to Import and Export Modules
Named Export:

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;


Default Export

const multiply = (a, b) => a * b;
export default multiply;


Import Named Exports:


import { add, subtract } from './math.js';



Import Default Export:
import multiply from './math.js';



Combine Named and Default Imports:
import multiply, { add, subtract } from './math.js';



How to Create and Use a Module
Create a Module: Save your code in a .js file (e.g., math.js).
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
export default multiply;



Import the Module: Use import in another file (e.g., app.js).
// app.js
import multiply, { add, subtract } from './math.js';

console.log(add(2, 3));        // 5
console.log(subtract(5, 3));   // 2
console.log(multiply(4, 3));   // 12



Setting up the Environment for Modules
Use a modern browser or Node.js to support ES6 modules natively.
For browsers, include the type="module" attribute in your <script> tag:


<script type="module" src="app.js"></script>



/ Exporting Functions
// utils.js
export function greet(name) {
    return `Hello, ${name}!`;
}
export function farewell(name) {
    return `Goodbye, ${name}!`;
}



// app.js
import { greet, farewell } from './utils.js';
console.log(greet('Akash'));
console.log(farewell('Akash'));*/