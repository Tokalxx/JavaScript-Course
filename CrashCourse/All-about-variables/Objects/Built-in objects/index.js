/*
Built-in Objects in JavaScript
Built-in objects are predefined objects provided by JavaScript that help with common programming tasks like working with numbers, 
strings, dates, or performing mathematical operations. 
These objects are part of the JavaScript runtime and do not require any imports to use.
Here’s an explanation of the most common built-in objects with examples:
*/

/*1. Global Objects
Object
The base object for all other objects.
Every object in JavaScript is an instance of Object.*/
const obj = { key: "value" };
console.log(Object.keys(obj)); // ["key"]
console.log(Object.values(obj)); // ["value"]
