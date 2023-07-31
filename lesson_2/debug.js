// function car(newCar) {
//   let make = getMake(newCar);
//   let model = getModel(newCar);
//   return [make, model];
// }

// function getMake(newCar) {
//   return newCar.split(' ')[0];
// }

// function getModel(newCar) {
//   return newCar.split(' ')[1];
// }

// let [make, model] = car('Ford Mustang');
// console.log(make === 'Ford');
// console.log(model[0] === 'M');

// try {
//   return model[0] === 'M';
// } catch {
//   return false;
// }

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger; //breakpoint
  counter += 1;
}

//Errors
//A ReferenceError occurs when you attempt to use a variable
//or function that doesn't exist.

// a;    Referencing a variable that doesn't exist results in a ReferenceError.
// a();  The same is true of attempting to call a function that doesn't exist.


//A TypeError occurs in a variety of different ways.
// Some of the most common situations that lead to a TypeError include:

//accessing a property on a value that does not have any properties,
//such as null or undefined
// trying to call something that isn't a function can also raise a TypeError
// trying to reassign a const variable:

// let a;   // a is declared but is empty, as it has not been set to a value.
// typeof(a);
// "undefined"

// a.name;      // TypeError: Cannot read property 'name' of undefined

// a = 1;
// a();         // TypeError: Property 'a' is not a function

// const b = 42;
// b = 3.14;    // TypeError: Assignment to constant variable.


//A SyntaxError is special in that it almost always occurs
//immediately after loading a JavaScript program, but before it begins to run.

JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0