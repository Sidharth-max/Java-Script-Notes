/*A Map is a collection of key-value pairs where both keys and values can be any data type
(objects, primitive types, etc.). It is similar to an object, but with key-value pairs where keys can be of any type
, not just strings or symbols.
Advantages of Map
Any type of key: Unlike objects, maps allow any value (including objects) to be used as a key.
Iterability: Maps are iterable, meaning you can loop through them in the order of insertion.
Size property: Maps have a built-in .size property that gives the number of key-value pairs.
Preserves insertion order: Maps remember the insertion order of the keys.*/



let map = new Map();

// 1. Adding key-value pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set(1, 'one');

// 2. Getting value by key
console.log(map.get('name'));  // Output: Alice

// 3. Checking if a key exists
console.log(map.has('age'));  // Output: true

// 4. Iterating through a Map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 5. Getting the size of the Map
console.log(map.size);  // Output: 3




/*Set in JavaScript
A Set is a collection of unique values. A Set can only store unique values and does not store duplicates.
 Sets are often used for storing unique data, such as a list of items without duplicates*/




 let set = new Set();

// 1. Adding values to Set
set.add('apple');
set.add('banana');
set.add('apple');  // Duplicates are not added

// 2. Checking if a value exists
console.log(set.has('banana'));  // Output: true

// 3. Iterating through a Set
set.forEach((value) => {
  console.log(value);
});

// 4. Deleting a value from Set
set.delete('banana');

// 5. Getting the size of the Set
console.log(set.size);  // Output: 1






/*Feature 	Map 	Set
Purpose	 Stores key-value pairs	      Stores unique values
Keys	Can be of any type (primitive or object)     	No keys, only values
Duplicates	Can have duplicate values for different keys     	No duplicates
Ordering	Keys are ordered based on insertion	Values are ordered based on insertion*/







/*A WeakMap is a collection of key-value pairs where the keys are objects and the values can be any type.
 The key difference between a WeakMap and a Map is that WeakMap keys are weakly referenced, meaning they 
 do not prevent garbage collection of the key. If there are no other references to the object used as a key,
  it can be garbage-collected.

Advantages of WeakMap
Garbage Collection: The keys in a WeakMap are weakly referenced, so they do not prevent the garbage collection of the key object when there are no other references to it.
Memory Efficiency: Useful for storing private data or metadata for objects without preventing them from being cleaned up.
No Enumeration: WeakMaps are not iterable, meaning you cannot loop through them.
Only Object Keys: Keys must always be objects (not primitive value*/






let weakMap = new WeakMap();

let obj = {};
let value = { name: "John" };

// 1. Setting a key-value pair
weakMap.set(obj, value);

// 2. Getting value by key
console.log(weakMap.get(obj));  // Output: { name: "John" }

// 3. Checking if a key exists
console.log(weakMap.has(obj));  // Output: true

// 4. Deleting a key-value pair
weakMap.delete(obj);

// 5. Checking if the key exists after deletion
console.log(weakMap.has(obj));  // Output: false




/*WeakSet in JavaScript
A WeakSet is similar to a Set but it only stores objects as values and the references to those objects are weak. This means that objects in a WeakSet can be garbage-collected when there are no other references to them.

Advantages of WeakSet
Garbage Collection: Objects in a WeakSet are weakly referenced, so they can be garbage collected when no other references to the object exist.
Memory Efficiency: It is useful for tracking objects without preventing them from being garbage-collected.
No Enumeration: WeakSets are not iterable, meaning you cannot loop through them.
Only Object Values: WeakSets only accept objects, not primitive values.*/




let weakSet = new WeakSet();

let o2 = {};

// 1. Adding an object to the WeakSet
weakSet.add(o2);

// 2. Checking if an object exists in the WeakSet
console.log(weakSet.has(o2));  // Output: true

// 3. Deleting an object from the WeakSet
weakSet.delete(o2);

// 4. Checking if the object exists after deletion
console.log(weakSet.has(o2));  // Output: false





/*Summary of WeakMap, WeakSet vs. Map, Set
Map and Set are standard collections for storing key-value pairs and unique values, respectively. Both are iterable, allowing you to loop through them. They are also strongly referenced, meaning the keys/values remain in memory as long as the collection exists.

WeakMap and WeakSet, on the other hand, use weak references for keys (in WeakMap)
 and values (in WeakSet). This means that objects in these collections can be garbage
 -collected when no other references to them exist. Neither WeakMap nor WeakSet is iterable,
  and they can only store objects as keys or values, respectively. This makes them more memory-efficient when working
 with large sets of objects that need to be cleaned up automatically.*/