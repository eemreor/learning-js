"use strict";
// Number 
let n = 123; // integer

console.log(1 / 0); // Output: Infinity
console.log(-1 / 0); // Output: -Infinity
console.log("not a number" / 2); // Output: NaN

//BigInt
console.log(900719925474099199999n + 1n); // Output: 900719925474099200000n

// String
let str = "Hello World!"; // string
let str2 = 'Hello World!'; // string
let str3 = `Hello World!`; // string

//////////////////////////////

let name = "Emre";
console.log("Hello ${name}"); // Output: Hello ${name}
console.log(`Hello ${name}`); // Output: Hello Emre

// Boolean
let isTrue = true;
let isFalse = false;

let isBig = 4 > 1; // true
console.log(isBig); // Output: true

// Null
let age = null; // null is an assignment value. It can be assigned to a variable as a representation of no value

// Undefined
let age2; // undefined means a variable has been declared but has not yet been assigned a value
console.log(age2); // Output: undefined

// Object and Symbol are also data types in JavaScript, but they are not covered in this snippet.

console.log(typeof 1);
console.log(typeof 1n);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof alert);