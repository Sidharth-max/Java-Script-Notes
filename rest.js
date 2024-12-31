/*The rest operator collects all remaining elements into a single entity (array or object). It is represented as ... and is primarily used in function parameter lists or destructuring assignments.
Collect Function Arguments*/

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


//Destructure Arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]


//Destructure Objects
const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };
const { name, ...details } = person;
console.log(name);     // Output: John
console.log(details);  // Output: { age: 30, city: 'New York', country: 'USA' }


//Default Parameters in Functions
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}
console.log(greet("Hello", "John", "Jane", "Doe")); // Output: Hello John, Jane, Doe!


//Combine and Manipulate Data
function combine(first, second, ...rest) {
    return [first, second, ...rest];
}
console.log(combine(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5]

