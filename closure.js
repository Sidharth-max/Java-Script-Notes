/*A closure in JavaScript is a function that retains access to its lexical scope (the environment in which it 
was created), even when the function is executed outside that scope.

Advantages of Closures
Data Encapsulation: Closures help create private variables that cannot be accessed or modified directly from outside the function.
State Maintenance: Closures allow functions to maintain state between executions.
Function Factories: They can be used to generate functions with specific behaviors.
Event Handlers: Closures are widely used in event-driven programming and callback functions.*/


function createCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3




function rememberMe(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetJohn = rememberMe("John");
console.log(greetJohn()); // Output: Hello, John!

const greetJane = rememberMe("Jane");
console.log(greetJane()); // Output: Hello, Jane!




function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15



function setupEventListener(buttonId) {
    let count = 0;
    const button = document.getElementById(buttonId);

    button.addEventListener("click", function() {
        count++;
        console.log(`Button clicked ${count} times`);
    });
}

// Assuming there's a button with id="myButton" in the HTML
setupEventListener("myButton");
// Clicking the button will log the count.
