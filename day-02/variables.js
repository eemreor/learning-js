"use strict";
let message; //a message variable has been created but not assigned a value yet 

message = "Hello, World!";  // a value was assigned to the variable

console.log(message);  // Output: Hello, World!

//method 2

let message2 = "Hello, World!";  // a value was assigned to the variable

console.log(message2);  // Output: Hello, World!

/////////////////////////////////////

let name = "Emre", age = 20, city = "Istanbul";  // multiple variables have been created and assigned values

console.log(name); // Output: Emre
console.log(age);   // Output: 20
console.log(city);  // Output: Istanbul

// Method 2

let name2 = "Emre";
let age2 = 20;
let city2 = "Istanbul";

console.log(name2); // Output: Emre
console.log(age2);  // Output: 20  
console.log(city2); // Output: Istanbul

// Method 3

let name3 = "Emre",
    age3 = 20,
    city3 = "Istanbul";

console.log(name3); // Output: Emre
console.log(age3);  // Output: 20
console.log(city3); // Output: Istanbul

//The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” way.

/////////////////////////////////////

let message3;

message3 = "Hello";

message3 = "World!"; // the value of the variable has been changed

console.log(message3); // Output: World!

/////////////////////////////////////

let message4 = "Hello World!";

let hello;

hello = message4; // the value of the variable has been assigned to another variable

console.log(hello); // Output: Hello World!
console.log(message4); // Output: Hello World!

/////////////////////////////////////

// Constants

const myBirthday = "01.01.2000"; // a constant variable has been created and assigned a value
console.log(myBirthday); // Output: 01.01.2000

////////////////////////////////////////

const myBirthday2 = "01.01.2000"; // a constant variable has been created and assigned a value

// myBirthday2 = "02.01.2000"; // an error will occur because the value of a constant variable cannot be changed /TypeError: Assignment to constant variable

//Tasks

//1
let name4 = "Ahmet";
let admin;
admin = name4;
console.log(admin); // Output: Ahmet

//2
let planetName = "Earth";
let currentUserName = "Emre";
