
// string is a sequence of characters used to represent text. Strings are immutable, meaning once a string is created, it cannot be modified.
//Strings can be declared using single quotes ('), double quotes ("), or backticks (`) for template literals.
let s2 = "Hello, World!"; // Using double quotes
let s = 'Hello, World!'; // Using single quotes
let st = `Hello, ${str1}`; // Using template literals (supports interpolation)












//String Methods

/*here are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays*/
let t = "HELLO WORLD";
let b= t.charAt(0);

let text = "HELLO WORLD";
let c2 = text.charCodeAt(0);

const name = "W3Schools";
let letter = name.at(2);//at allows the use of negative indexes while charAt() do not


//length():-give length of string
let st2 = "JavaScript";
console.log(st2.length); // Output: 10

//charAt(index):-Returns the character at the specified index.
let e = "JavaScript";
console.log(e.charAt(4)); // Output: S

//concat():-combine two string
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result); // Output: Hello World


//includes(substring):-Checks if a string contains a certain substring. Returns true or false.
let sm= "Hello, World!";
console.log(sm.includes("World")); // Output: true


//indexOf(substring);-Returns the index of the first occurrence of the specified substring. Returns -1 if the substring is not found.
let r2 = "Hello, World!";
console.log(r2.indexOf("World")); // Output: 7

//slice(start, end):-Extracts a section of a string and returns it as a new string. The end index is optiona
let sr = "JavaScript";
console.log(sr.slice(0, 4)); // Output: Java


//substring(start, end):-Similar to slice(), but does not accept negative indices.
let a = "JavaScript";
console.log(a.substring(4, 10)); // Output: Script

/*substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.//
<script>
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(7,6);
</script>//banaana*/


//toUpperCase():-Converts the string to uppercase.
let u = "JavaScript";
console.log(u.toUpperCase()); // Output: JAVASCRIPT


//toLowerCase():-Converts the string to lowercas
let m = "JavaScript";
console.log(m.toLowerCase()); // Output: javascript

//trim():-Removes whitespace from both ends of the string.
let t4 = "   Hello, World!   ";
console.log(t5.trim()); // Output: "Hello, World!"

//replace(oldSubstring, newSubstring):-Replaces the first occurrence of a substring with a new substring.
let no = "Hello, World!";
console.log(no.replace("World", "JavaScript")); // Output: Hello, JavaScript!


//split(separator):-Splits the string into an array of substrings based on the provided separator
let me = "apple,banana,orange";
let arr = me.split(",");
console.log(arr); // Output: ["apple", "banana", "orange"]


//repeat(count):-Returns a new string that is the original string repeated a specified number of times.
let k1 = "Hi!";
console.log(k1.repeat(3)); // Output: Hi!Hi!Hi!

//charCodeAt(index):-Returns the Unicode value of the character at the specified index.
let m1 = "JavaScript";
console.log(m1.charCodeAt(0)); // Output: 74 (Unicode value of 'J')


//startsWith(substring):-Checks if the string starts with the specified substring.
let u1 = "JavaScript";
console.log(u1.startsWith("Java")); // Output: true


//endsWith(substring):-Checks if the string ends with the specified substring.
let h1 = "JavaScript";
console.log(h1.endsWith("Script")); // Output: true

//match(regex):-Matches the string against a regular expression and returns an array of matches.
let kl = "I love JavaScript!";
console.log(kl.match(/love/)); // Output: ["love"]

/*The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).//
<script>
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");

document.getElementById("demo").innerHTML = Array.from(iterator);
</script>*/




//search(regex):-Searches for a match using a regular expression and returns the index of the match.
let s8= "I love JavaScript!";
console.log(s8.search(/JavaScript/)); // Output: 7

//padStart(targetLength, padString):-Pads the current string with another string (repeated if needed) so that the resulting string reaches a given length
let n2= "5";
console.log(sn2.padStart(3, '0')); // Output: 005

//padEnd(targetLength, padString):-
let str = "5";
console.log(str.padEnd(3, '0')); // Output: 500

