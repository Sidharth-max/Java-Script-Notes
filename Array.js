//Array is datatype which store any  kind of data//
  //When to Use Arrays. When to use Objects.
//JavaScript does not support associative arrays.
//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers
  //JavaScript arrays are heterogeneous, meaning they can store elements of different types, such as numbers, strings, objects, functions//
  /*any programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.  */

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John

/*The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.*/
/*javaScript new Array()
JavaScript has a built-in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:

const points = new Array();
const points = [];*/


  //An array can be created using two common methods:


//Using the Array constructor
let n = new Array(1, 2, 3, 4, 5);
console.log(n); // [1, 2, 3, 4, 5]




//Using array literal:
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]

//JavaScript allows mixed data types in an array. You can store elements of different types—such as numbers, strings, booleans, objects,
let mixedArray = [42, "Hello", true, { name: "John", age: 30 }, [1, 2, 3]];

console.log(mixedArray);
// Output: [42, "Hello", true, { name: "John", age: 30 }, [1, 2, 3]]

// Accessing individual elements:
console.log(mixedArray[0]); // 42 (Number)
console.log(mixedArray[1]); // "Hello" (String)
console.log(mixedArray[2]); // true (Boolean)
console.log(mixedArray[3]); // { name: "John", age: 30 } (Object)
console.log(mixedArray[4]); // [1, 2, 3] (Array)



//Array built in method//
//push():-Adds one or more elements to the end of an array 
let z = [1, 2, 3];
z.push(4); // Adds 4 to the array
console.log(z); // [1, 2, 3, 4]



//pop():- Removes the last element from an array 
let m = [1, 2, 3];
let lastElement = m.pop(); // Removes 3
console.log(m); // [1, 2]
console.log(lastElement); // 3


//shift():-Removes the first element from an array and returns that element.
let p = [1, 2, 3];
let firstElement = p.shift(); // Removes 1
console.log(p); // [2, 3]
console.log(firstElement); // 1



//unshift():-Adds one or more elements to the beginning of an array and returns the new length
let q = [2, 3];
q.unshift(1); // Adds 1 at the start
console.log(q); // [1, 2, 3]


//concat():- Merges two or more arrays and returns a new array
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // Merges arr1 and arr2
console.log(merged); // [1, 2, 3, 4]


//slice():- Returns a shallow copy of a portion of an array into a new array, selected from start to end (not including end)
let c = [1, 2, 3, 4, 5];
let sliced = c.slice(1, 3); // Returns elements from index 1 to 3 (excluding index 3)
console.log(sliced); // [2, 3]



//splice():-Changes the content of an array by removing or replacing existing elements and/or adding new elements.
let s = [1, 2, 3, 4];
s.splice(1, 2, 9); // Removes 2 elements starting at index 1 and inserts 9
console.log(s); // [1, 9, 4]



//indexOf():- Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let w= [1, 2, 3, 4];
let l= w.indexOf(3); // Finds the index of 3
console.log(l); // 2

//includes():- Determines whether an array includes a certain value, returning true or false.
let arr3 = [1, 2, 3];
let hasTwo = arr3.includes(2); // Checks if 2 is in the array
console.log(hasTwo); // true


// /forEach():-Executes a provided function once for each array element
let ar = [1, 2, 3];
ar.forEach(function(element) {
    console.log(element * 2); // Logs 2, 4, 6
});


//map():-Creates a new array populated with the results of calling a provided function on every element in the calling array
let o = [1, 2, 3];
let doubled = o.map(function(element) {
    return element * 2;
});
console.log(doubled); // [2, 4, 6]


//filter():-Creates a new array with all elements that pass the test implemented by the provided function.
let k = [1, 2, 3, 4];
let filtered = k.filter(function(element) {
    return element > 2;
});
console.log(filtered); // [3, 4]


//reduce():-: Executes a reducer function on each element of the array, resulting in a single output value.
let d = [1, 2, 3, 4];
let sum = d.reduce(function(acc, current) {
    return acc + current;
}, 0);
console.log(sum); // 10


//find():-Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
let i= [1, 2, 3, 4];
let found = i.find(function(element) {
    return element > 2;
});
console.log(found); // 3





const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first)
function myFunction(value, index, array) {
  return value > 18;//First number over 18 is 25
}




//findIndex():-Returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns -1.
let u = [1, 2, 3, 4];
let index = u.findIndex(function(element) {
    return element > 2;
});
console.log(index); // 2


//some():-Tests whether at least one element in the array passes 
// the test implemented by the provided function.
let f = [1, 2, 3];
let hasLargeNumber = f.some(function(element) {
    return element > 2;
});
console.log(hasLargeNumber); // true


//findLast() method that will start from the end of an array and 
//return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);





//every():- Tests whether all elements in the array pass the test implemented by the provided function.
let g = [1, 2, 3];
let allBelowFour = g.every(function(element) {
    return element < 4;
});
console.log(allBelowFour); // true


//The Array.from() method returns an Array object from any object with a length property or any iterable object.
const myArr = Array.from("ABCDEFG");
console.log(myArr);
//output
/*[
  'A', 'B', 'C',
  'D', 'E', 'F',
  'G'
]*/


//sort():- Sorts the elements of an array in place and returns the array.
let r = [3, 1, 4, 2];
r.sort(); // Sorts the array
console.log(r); // [1, 2, 3, 4]


//reverse():- Reverses the order of the elements in an array in place and returns the reversed array.
let h = [1, 2, 3, 4];
h.reverse(); // Reverses the array
console.log(h); // [4, 3, 2, 1]


//join():-Joins all elements of an array into a string and returns this string.
let arr = ['Hello', 'world'];
let str = arr.join(' '); // Joins the array into a string with a space separator
console.log(str); // 'Hello world'


//Array.isArray():-cheack variable is array or not 
var a=[3,2,4,"ankita"];
var b=Array.isArray(a);
console.log(b);



//The copyWithin() method copies array elements to another position in an array:
const e = ["Banana", "Orange", "Apple", "Mango"];
e.copyWithin(2, 0);//Copy to index 2, all elements from index 0: Banana,Orange,Banana,Orange


//flaten array is use for Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.

Example
const my = [[1,2],[3,4],[5,6]];
const ne = my.flat();//[1,2,3,4,5,6]


//flatmap()
const s1 = [1, 2, 3, 4, 5,6];
const newArr = s1.flatMap(x => [x, x * 10]);
console.log(newArr);//1,10,2,20,3,30,4,40,5,50,6,60


//How to Recognize an Array
const x1 = ["apples", "bananas", "oranges"];
Array.isArray(x1);



