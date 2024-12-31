/*The spread operator (...) in JavaScript is used to spread out elements of an array, object, or any iterable into individual
 elements or properties. It can be applied in various contexts, such as arrays, objects,
  and function calls. Below are five examples of its us*/

  //Copying Arrays
  const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]


//Spreading Elements in Function Calls
function sum(a, b, c) {
  return a + b + c; 
}

const numbers = [10, 20, 30];
console.log(sum(...numbers)); // Output: 60


//Copying Objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }


//Merging Objects
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Output: { name: "Alice", age: 25 }
