//Basic Arrow Function
const greet = () => console.log("Hello, World!");
greet();



// Arrow Function with Parameters
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


//Arrow Function Returning an Object
const createUser = (name, age) => ({ name, age });
console.log(createUser("Akash", 23)); // Output: { name: 'Akash', age: 23 }




//Arrow Function with a Single Parameter
const square = num => num * num;
console.log(square(4)); // Output: 16



//Arrow Function in Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
