/*Strict mode is a feature in JavaScript that enforces stricter parsing and error
 handling in your code. It helps catch common coding mistakes and "unsafe" actions, such as assigning values to 
undeclared variables, thereby improving the robustness and security of your code*/
"use strict"; 


"use strict";
const obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });

obj.prop = 77; // Error: Cannot assign to read-only property 'prop'




"use strict";
const obj = {
    name: "John",
    name: "Doe" // Error: Duplicate property name not allowed
};
console.log(obj);



"use strict";
const obj = Object.freeze({ name: "John" });
obj.name = "Doe"; // Error: Cannot assign to read-only property 'name'



"use strict";
const num = 0o10; // Error: Octal literals are not allowed in strict mode
console.log(num);




"use strict";
function showThis() {
    console.log(this); // undefined
}
showThis();
