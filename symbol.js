/*A Symbol is a unique and immutable primitive data type introduced in ES6. It is primarily used as a unique key for object properties to avoid naming conflicts.

Advantages
Uniqueness: Symbols guarantee a unique identifier, which avoids accidental property overwrites.
Immutability: Symbols are immutable, ensuring their integrity.
Avoid Key Collisions: Particularly useful for adding keys to objects without conflicting with existing keys.
Disadvantages
Limited Debugging: Symbol properties can make debugging more complex as they are not easily visible.
Memory Usage: Symbols are not garbage-collectable if referenced unintentionally in global symbol registry.*/



// Creating Unique Symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false


//Using Symbols as Object Keys
const uniqueKey = Symbol('key');
const obj = {
    [uniqueKey]: 'Value for unique key'
};
console.log(obj[uniqueKey]); // Value for unique key
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(key)]


//. Adding Hidden Properties
const ob3 = {};
const hidden = Symbol('hidden');
ob3.visible = 'Visible property';
ob3[hidden] = 'Hidden property';
console.log(ob3.visible); // Visible property
console.log(ob3[hidden]); // Hidden property
console.log(Object.keys(ob3)); // ["visible"]



// Using Symbol.for() for Global Symbol Registry
const sy1 = Symbol.for('sharedKey');
const sy2 = Symbol.for('sharedKey');
console.log(sym1 === sym2); // true

const localSym = Symbol('localKey');
console.log(Symbol.keyFor(localSym)); // undefined
console.log(Symbol.keyFor(sym1)); // "sharedKey"


//Custom Iterator with Symbol.iterator
const iterableObj = {
    values: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.values.length) {
                    return { value: this.values[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const value of iterableObj) {
    console.log(value); // 1, 2, 3
}
