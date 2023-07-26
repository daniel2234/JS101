// Specific Topics of Interest
// You should be able to clearly explain the following topics:

// declarations, initialization, assignment, and re-assignment 
// variable scope, especially how variables interact with function definitions and blocks
// primitive values, objects, and type coercions
// object properties
// mutability vs. immutability vs. const
// loose and strict equality
// passing arguments into and return values out of functions
// working with Strings
// working with Arrays, especially the iteration methods (forEach, map, filter, and find)
// working with Objects; accessing keys and values of an Object as arrays
// arrays are objects
// understand the concepts of pass-by-reference and pass-by-value
// variables as pointers
// console.log vs. return
// truthiness vs. boolean
// function definition and invocation
// function declarations, function expressions, and arrow functions
// implicit return value of function invocations
// first-class functions
// side-effects
// naming conventions (legal vs idiomatic)
// be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)


// Example
// Examine the code example below. The last line outputs the string 'Hi' rather than the string 'Hello'. Explain what is happening here and identify the underlying principle that this demonstrates.

let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);


// Best Approach - the global variable greeting is initialized to the string 'Hello', on line 31, Within the loop, lines 33 - 36 define a block within which greeting is reassigned to the string 'Hi' on line 34, On line 38, console.log is called with the variable greeting, passed it as an argument, since greeting to 'Hi', this is what output 

//Better Approach - the global variable greeting is declared and initialized to the string 'Hello' on line 31. Lines 33 - 36 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first re-assigns the greeting global variable to 'Hi' on line 34. The next line, break, cause the loop to end, with execution resuming after line 36. Finally, on line 38, console.log is called with the value of the variable greeting passed to it as an argument, Since greeting is now assigned to 'Hi', that is what gets output. This example, demonstrates, variable scoping rules in Javascript, specifically the fact that a variable declared in the outer scope is accessible from a nest inner scope.

let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();

//the function outputs "Hello, World!", which obtains from the global variable 'hello', then returns undefined. the function can use hello, since functions have access to variables defined in the outer scope


greeting = 'Hello';

// The greeting variable is assigned to the string 'Hello'. -> prefer this one, writes like a sentence

// The string 'Hello' is assigned to the greeting variable.


function appendTo(str, otherStr) {
  for (let index = 0; index < otherStr.length; ++index) {
    str += otherStr[index];
  }

  return str;
}

//we're declaring the a function name appendTo that takes two arguments, both of which are presumed to be strings, we then use a for loop with an index local variable to iterate over the characters in the second string, appending each character to the value of the first thing. We then return the string.

// the distinction between truthy and falsy values and the boolean values true and false.

//In JavaScript, the falsy values false, 0, NaN, "", undefined, and null are all said to evaluate to false when used in a boolean context


```javascript
array.forEach(element => {
  console.log(element.foo);
});
```

// This paragraph talks about the `forEach` method being
// called by the object referenced by `array` in the above
// code. It invokes the callback function for each element,
// passing that element to the callback as an argument.
// Within the callback, the element is known by the
// parameter name `element`, and the callback uses the
// `console.log` method log the value of `element.foo`.

//this paragraph talks about the forEach method being called by the object reference by `array' in the above code. It invokes the callback function for each element, passing that element to the callabck as an argument
//within the callback, the element is known by the parameter name 'element', and the callback uses the console.log method log the value of 'element.foo'