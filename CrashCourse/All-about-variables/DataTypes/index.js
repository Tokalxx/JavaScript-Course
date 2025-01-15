// 1. Primitive Data Types

// String - Represents textual data
const str = "Hello, World!";
console.log(typeof str); // "string"

// Number - Represents integer and floating-point numbers
const num = 42;
const float = 3.14;
const nanValue = NaN;
const infinityValue = Infinity;
console.log(typeof num); // "number"

// BigInt - Represents large integers
const bigIntValue = 9007199254740991n; // Add 'n' at the end for BigInt
console.log(typeof bigIntValue); // "bigint"

// Boolean - Represents logical values
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue); // "boolean"

// Undefined - A variable that is declared but not assigned a value
let unassignedVar;
console.log(unassignedVar); // undefined
console.log(typeof unassignedVar); // "undefined"

// Null - Represents intentional absence of value
const emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // "object" (this is a known quirk in JS)

// Symbol - Represents a unique identifier
const uniqueKey = Symbol("unique");
console.log(uniqueKey); // Symbol(unique)
console.log(typeof uniqueKey); // "symbol"

// 2. Non-Primitive (Reference) Data Types

// Object - A collection of key-value pairs
const person = { name: "John", age: 30 };
console.log(person); // { name: "John", age: 30 }
console.log(typeof person); // "object"

// Array - A special type of object that stores ordered values
const numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]
console.log(typeof numbers); // "object"

// Function - A callable object
function greet() {
  console.log("Hello!");
}
greet(); // "Hello!"
console.log(typeof greet); // "function"

// Date - Represents date and time
const today = new Date();
console.log(today); // Current date and time
console.log(typeof today); // "object"

// RegExp - Represents a regular expression pattern
const regex = /abc/;
console.log(regex); // /abc/
console.log(typeof regex); // "object"

// Map - A collection of key-value pairs with any type of key
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}
console.log(typeof map); // "object"

// Set - A collection of unique values
const set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}
console.log(typeof set); // "object"

// WeakMap - Like Map but with weak keys (objects only)
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
console.log(weakMap); // WeakMap { <items unknown> }
console.log(typeof weakMap); // "object"

// WeakSet - Like Set but with weak references (objects only)
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet); // WeakSet { <items unknown> }
console.log(typeof weakSet); // "object"

// 3. Special Cases

// Class - Syntactic sugar over functions to define a blueprint for objects
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const dog = new Animal("Buddy");
console.log(dog); // Animal { name: "Buddy" }
console.log(typeof Animal); // "function"

// Promise - Represents an asynchronous operation
const promise = new Promise((resolve, reject) => {
  resolve("Success!");
});
console.log(promise); // Promise { "Success!" }
console.log(typeof promise); // "object"

// Function Types: Arrow Function
const arrowFunction = () => console.log("I am an arrow function!");
arrowFunction(); // "I am an arrow function!"
console.log(typeof arrowFunction); // "function"

// Function Types: Anonymous Function
const anonymousFunction = function () {
  console.log("I am anonymous!");
};
anonymousFunction(); // "I am anonymous!"
console.log(typeof anonymousFunction); // "function"
