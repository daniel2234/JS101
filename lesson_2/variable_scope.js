//Functions define a new scope for local variables
//you can think of the scope defined by function as an inner scope
//Nested functions defined nested scopes

//A variable scope's is determined by where it is declared


//Rule 1: Outer scope variables can be accessed by the inner scope

let a = 1;         // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA(); //function executes and that the a gets re-assigned
console.log(a);   // => 2  "a" was re-assigned in the inner scope

//this code demonstrates two things: inner scope can access outer scope variables. the second, and less intuitive, concept is that you can change variables from an inner scope and have that change affect the outer scope, For example, when we reassigned the variable in the inner scope with a+= 1, that reassignment was visible in the outer scope.

//This means that when we assign variables in an inner scope, we have to be very careful that we're not accidentally reassigning an existing variable in an outer scope. That's a big reason to avoid single-letter variable names.




//Rule 2: inner scope variables cannot be access by the outer scope

function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); /// ReferenceError: a is not defined


//Rule 3: peer scopes do not conflict

function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();

//Executing console.log(a) on line 7 throws an error since a
//is not in scope in funB
//The declaration on line 2 does declare a variable named a,
//but that variable's scope is confined to funcA,
//funcB can't see the variable at all
//this also means that we could declare a seperate a variable in funcB
//if we wanted
//the two a variables would have different local scopes and would also
//independent of each other


//Rule 4: nested functions have their own variable scope

let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);    // => 1
  console.log(b);    // => 2
  console.log(c);    // => ReferenceError
}

foo();

//Rule 5: inner scope variables can shadow outer scope variables
//this ia function definition within another function /
function logElements(array) {
  array.forEach(function(element){
    console.log(element);
  })
}

logElements([1,2,3]);

//Rule 5: inner scope variables can shadow outer scope variables
//this ia function definition within another function 
[1,2,3].forEach(number =>{
  console.log(number);
})

//Block Scope
//1. Outer blocks cannot access variables from inner scopes
//2. Inner blocks can access variables from outer scopes
//3. Variables defined in an inner blocks can shadow variables from outer scopes


//Variable shadowing isn't limited to callback functions.
if (true) {
  let a = 'foo';
}

console.log(a); // ReferenceError


let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}


function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();


let a = 1;

function doit(a) {
  console.log(a) // => 3
}

doit(2);
console.log(a) // => 1

//when we use name from anotherFunction()to provide an argument to changeName, are we passing it by reference or by value?it looks like we may be passing it by value since re-assigning the variable does not effect the variable inside the function anotherFunction
//had the name variable in anotherFunction changed, we would say that Javascript is pass-by-reference. Does that mean that Javascript is pass-by-value?
function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();

//what does pass-by-reference mean?

function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    //re-assigns the names index
    //takes the first index element value creates Uppercase letter
    //and then adds the copy of index value element and adds into the copy 
    //of the element value after the first index
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']


//Variable Scope Exercises
// Question 1. What will the following code log to the console and why? Don't run it until you have tried to answer.
let num = 5;

function myFunc() {
  num = 10;
}

myFunc()
console.log(num) //this will log 10 
//outer scope variables can be accessed by the inner scope

//This logs 10 to the console. 
//The variable num declared and initialized to 5 on line 1 is accessible within the scope of the myFunc function.
// When that function is invoked, num is reassigned to 10.

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.
let num = 5;

function myFunc() {
  console.log(num); // => 5
  num = 10;
}

myFunc();
console.log(num);

//This logs 10 to the console.
//The variable num is declared and initialized to 5 in Line 1 is accessible within the scope of the myFunc function.
//When that function is invoked, the outer scope variable will be logged, undefined will be returned and num will be reassigned to 10

//this first logs 5 to the console and then logs 10 to the console. The variable num declared and initialized to 5 on line 1 is accessible within the scope of the myFunc function. When that function is invoked it first logs the value of num, which at this point in execution is 6, and then reassigns num to 10. The reassigned valye is then logged on the last line of the code snippet


// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  let num = 10; //line 4
}

myFunc();
console.log(num);

// this logs 5 to the console. 
// The variable num declared and initialized to 5 on line 1 is accessible within the scope of the myFunc function,
//When myFunc() is invoked, a new inner scope is created and the variable num is declared and initialized to 10.
//the key thing here is that line 4 is the initialization of a new variable rather than the reassignment of the variable from line 1.


//Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10; //Line 5
}

myFunc();
console.log(num); // this will still log 5 after the reference error
//tested this.

// This won't log anything to the console. 
// Instead, this code will raise a ReferenceError. 
// The let declaration on line 5 creates a new num variable within the scope of the body of the myFunc function. 
// The console.log on line 4 is attempting to log the value of that num variable, not the one declared and initialized on line one. Since the variable hasn't been initialized yet however, we get a reference error:


// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

//this will log 5 to the console.
//When the myFunc function is invoked, due to the function parameter num Javascript creates a new variable num within the scope of the function 
//This varibale blocks access to the variable of the same name decalred and initialized in the global scope on line 1.
//That variable cannot therefore  be reassigned by the function and so retains its initial value of 5, which is what is logged.

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

//this will log 3 to the console. 
// the block defined here by the curly braces works much in the same way as a function body when it comes to variable scope
//the varible num declared and initialized on line 1 is incremented by 1 within the while loop on line 4(this line essentially reasssigned num to a new value, which is its current value added to 1)
//this happens twice, while num is less than 3 and so the condition for the while loop to execute is met.
//Once num reaches 3, the while loop no longer runs and so program execution continues to the console.log on line 7, which logs the reassigned value of num.



// Question 7
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// this will log 6 

// this doesn't log anything to the console.
//this code results in an infinite loop, which will eventually time out
//Line 4 declares and initialized a variable num to the number 5
//this is a different variable to the num declared and initialized to 1 on line 1, and exists within the scope of the block defined by the curly braces
//it is this num that is increment on line 5
// the condition for the while loop, however, references the num declared on line 1, not the one within the scope of the block
//the condition for ending the while loop is therefore never met, resulting in an infinite loop

