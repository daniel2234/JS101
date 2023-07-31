console.log(true); //true
console.log(false); //false

function makeLonger(string, longer) {
  if(longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger('abc', true); //'abcabc'
makeLonger('xyz', false); //'xyz'

//check if the string is more that string of O and between string of "9"
function isDigit(char) {
  if(char >= '0'  && char <= '9') {
    return true;
  } else {
    return false;
  }
}

isDigit('5'); //true
isDigit('a'); //false


let value = 6;
if (value == true) {
  console.log("It's true");
} else if (value === false) {
  console.log("It's false")
} else {
  console.log("It's not true or false");
}

let num = 6;
if(num > 10) {
  console.log('small number');
} else {
  console.log('large number');
}

function isSmall(number) {
  return num < 10;
}

let num = 15;
if(isSmall(num)) {
  console.log("small number");
} else {
  console.log("big number");
}

//This code logs large number since isSmall(num) evaluates as false when num greater than or equal to 10.

if (name && (name.length > 0)) {
  console.log(`Hi, ${name}.`);
} else {
  console.log("Hello, whoever you are.");
}


//After that review of booleans and logical operators, we're finally able to talk about the notion of truthiness. Truthiness differs from boolean values in that JavaScript evaluates almost all values as true. There are some exceptions, however:

// false
// undefined
// null
// 0
// "" (an empty string)
// NaN
// All of these values evaluate as false. Memorize them!


let num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error!");
}

console.log(num === true);        // => false


let name;
if (name = getNameFromUser()) { //solicits and returns the user's name and returns an empty string if the user doesn't enter a name.
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}

//if the user didn't enter her name, the expression evaluates as false, and the code logs you must enter your name!.

//the good way
let name = getNameFromUser();
if (name) {
  console.log(`Hi ${name}`);
} else {
  console.log("you must enter your name!");
}

//this the best way
let name = getNameFromUser();
if (name === "") {
  console.log("you must enter your name!");
} else {
  console.log(`Hi ${name}`);
}