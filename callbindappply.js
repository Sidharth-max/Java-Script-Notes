/*call, apply, and bind are methods available on functions that allow you to 
control the context (this) in which a function executes. 
Here's an explanation of each and how they differ, with examples:
call
The call method invokes a function with a specific this context and arguments passed individually.*/

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const p3 = { name: 'Alice' };
greet.call(p3, 'Hello', '!'); // Hello, Alice!


/*apply
The apply method is similar to call, but arguments are passed as an array*/
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const p9 = { name: 'Alice' };
greet.apply(p9, ['Hi', '?']); // Hi, Alice?



 /*bind
The bind method does not invoke the function immediately. Instead, it returns a new 
function with the specified this context and optionally pre-set argument*/
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
const boundGreet = greet.bind(person, 'Hey');
boundGreet('!'); // Hey, Alice!




/*Normal Function Call
A regular function call uses the default this context, which in strict mode is 
undefined, and in non-strict mode is the global object (e.g., window in browsers).*/
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this ? this.name : 'undefined'}${punctuation}`);
}

greet('Hello', '!'); // Hello, undefined!


//code compare
function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const p10 = { name: 'xyz' };

// Using call
introduce.call(p10, 'Hello', '!'); // Hello, I am xyz

// Using apply
introduce.apply(person, ['Hi', '.']); // Hi, I am xyz.

// Using bind
const boundIntroduce = introduce.bind(p11, 'Hey');
boundIntroduce('!'); // Hey, I am xyz!

// Normal function call
introduce('Hi', '.'); // Hi, I am undefined.
