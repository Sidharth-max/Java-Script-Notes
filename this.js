/*this keyword refers to the object that is currently 
executing the function. Its value depends on how and where the function is called:*/
// Global Context
console.log(this); // In a browser, it will log the `window` object.


 //Object Method
const o8 = {
    name: "JavaScript",
    getName: function() {
        return this.name;
    }
};
console.log(o8.getName()); // Output: JavaScript


//Function Context
function showThis() {
    console.log(this);
}
showThis(); // In non-strict mode, logs the global object (window). In strict mode, logs `undefined`.


//Arrow Function
const arrowFunction = () => {
    console.log(this);
};
arrowFunction(); // Logs `this` from the surrounding scope.


//Binding this Explicitly
const o11 = {
    value: 42
};

function printValue() {
    console.log(this.value);
}

const boundFunction = printValue.bind(o11);
boundFunction(); // Output: 42
