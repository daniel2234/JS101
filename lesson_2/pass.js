//pass by value
function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();


//pass by reference 
function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']


//return values
//code snippet 1
function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number);    // 1
console.log(newNumber); // 1

number = 3;
console.log(number);    // 3
console.log(newNumber); // 1


//code snippet 2
function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray); // true (they are same object)

array.push(4);
console.log(array);    // [ 1, 2, 3, 4 ]
console.log(newArray); // [ 1, 2, 3, 4 ]


//Simple assignments in JavaScript work a lot like pass-by-value and pass-by-reference:

let number = 1;
let newNumber = number; // is this pass by value?

let arr = [1, 2, 3];
let newArr = arr; // is this pass by reference?



let word = 'Hello';
let param = word;

param = 'Goodbye';
word = param;

console.log(word); // 'Goodbye'

// That's not possible with the second example. Assigning word to param, e.g. after the function is invoked, will give us a ReferenceError: