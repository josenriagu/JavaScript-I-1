// ************************************** FUNCTIONS *****************************
// 1. traditional declaration declaration
function intro(name) {
   return `Hello, my name is ${name}`
}

// ${} works only when enclosed in `` and `` is called template literal and ${} is called interpolation.
console.log(intro("Jose"));

// alternative without parameters
function intro2() {
   let name = "Abel";
   return `Hello, my name is ${name}`
}

console.log(intro2());

// 2. function expressions: assign anonymous function to a variable
let intro3 = function (name) {
   return `Hello, my name is ${name}`
}

console.log(intro3("Gabe"));

// 3. arrow syntax (fat-arrow)
let intro4 = (name) => `Hello, my name is ${name}`

console.log(intro3("Justinas"));

// ************************************** VAR, LET, CONST *****************************

// order 1: name is Abel
var name1 = "Abel";
console.log(name1); // Abel
var name1 = "Jose"; // re-initialize will work

// order 2: name2 is Jose
var name2 = "Abel";
name2 = "Jose"; // re-assign will work
console.log(name2); //Jose

//order 3: name3 is undefined
console.log(name3); // undefined
var name3 = "Abel";
name3 = "Jose";

let name4 = "Abel";
// let name4 = "Jose"; // re-initialize will not work

let name5 = "Abel";
name5 = "Jose"; // re-assign will work

const name6 = "Abel";
// const name6 = "Jose"; // re-initialize will not work: Uncaught SyntaxError: Identifier 'name6' has already been declared
// name6 = "Jose";  // re-assign will work: Uncaught TypeError: Assignment to constant variable.

// ************************************** OBJECT, ARRAYS *****************************
// object literal
let obj1 = {
   name: "Abel",
   cohort: "WEBEU3",
   speak: function (name) {
      return `Hallo, my name is ${name}`
   }
};
obj1.favTeacher = "Gabe"

console.log(obj1);
console.log(obj1.name);
console.log(obj1.cohort);
console.log(obj1.favTeacher);
console.log(obj1.speak("Abel"));

// as an instance of Object class
let obj2 = new Object; // let obj2 = {}
obj2.name = "Jose"
obj2.cohort = "WEBEU2"
obj2.speak = function (name) {
   return `Hallo, my name is ${name}`
}

console.log(obj2);
console.log(obj2.name);
console.log(obj2.cohort);
console.log(obj2.speak("Jose"));

let obj3 = new Object;
obj3 = { ...obj2, speak: function (age) { return `Hallo, I am ${age} years old`} }; // {...obj} is called object destructuring

console.log(obj3);
console.log(obj3.name);
console.log(obj3.cohort);
console.log(obj3.speak(34));

// array literal
let arr1 = ["Abel", "WEBEU3", "Gabe"]
arr1[3] = "Jose";
arr1[2] = "Gabriel";
console.log(arr1);
console.log(arr1[0]); // returns the element at the specified index
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);

// common array methods: map(), filter(), find(), reduce(), sort(), concat() etc