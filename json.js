/*JSON: Definition and Usage
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for 
humans to read and write and easy for machines to parse and generate. JSON is a text format that 
represents data as key-value pairs, similar to a JavaScript object.

Advantages of JSON:
Lightweight and Simple: JSON's compact syntax is easier to write, read, and process.
Language Independent: JSON can be used with almost all programming languages.
Easy to Parse: Most modern programming languages provide built-in libraries or tools to parse and generate JSON.
Efficient Data Exchange: Ideal for client-server communication, especially in web APIs.
Support for Nested Data: JSON supports hierarchical structures, making it versatile for complex data representations*/



 /*Basic JSON Object
 {
    "name": "xyz3",
    "age": 23,
    "skills": ["Java", "Python", "JavaScript"]
  }
  */


//Access JSON in JavaScript
const jsonData = '{"name": "xyz2", "age": 23, "skills": ["Java", "Python", "JavaScript"]}';
const obj = JSON.parse(jsonData); // Convert JSON string to JavaScript object

console.log(obj.name); // Output: xyz2



// Convert JavaScript Object to JSON
const user = {
  name: "xyz",
  age: 23,
  skills: ["Java", "Python", "JavaScript"]
};

const jsonString = JSON.stringify(user); // Convert JavaScript object to JSON string
console.log(jsonString);



//Fetch API Example with JSON
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parse JSON from the response
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
