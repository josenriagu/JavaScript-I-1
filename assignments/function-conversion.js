// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
   console.log("Function was invoked!");
};
myFunction();

// step 1: traditional function declaration
function anotherFunction(param) {
   return param;
};

// step 2: function expression
let anotherFunction = function (param) {
   return param;
};

//step 3: arrow function
let anotherFunction = (param) => {
   return param;
};
anotherFunction("Example");

let add = (param1, param2) => {
   return param1 + param2;
};
add(1, 2);

let subtract = (param1, param2) => {
   return param1 - param2;
};
subtract(1, 2);


// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => {
  return num * 3;
});
console.log(triple);