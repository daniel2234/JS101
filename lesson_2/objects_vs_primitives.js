let word = 'hello';
let newWord = word.replace('h', 'j');

console.log(newWord); // 'jello'

// It may look like we've changed the string 'hello' to 'jello'. The key thing to understand here though is that replace returns a new string, it doesn't mutate the existing string


// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

//This logs the string 'Hello'.
// myWord variable i assigned to a string, which as a primitive is immutable,
//Callinf concat on the string retursn a new string with the string there appended to it
//This doesn't affect the original stirng, ans we don't do anything with the return value.



//Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord); // this will log Hello
myWord.replace('H', 'J');
console.log(myWord); // thiw will log Hello
myWord.toUpperCase();
console.log(myWord); //this will log Hello

//Each of the console.log() invocations logs the string 'Hello'
//This is the same string in each case, and it isn't affected by any pf the intervening method invocations( repeat, replace, toUpperCase), eahc of which return a new string but don't have any effect on the original string, which is immutable, it doesn't matter which String methods we call on the string, or in which order. Strings, being primitive values, are immutable


//Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

//This logs ['hello','goodbye'] to the console.
//the value assigned to the myWords variable is an array
//Arrays are objects and are therefore mutable
//The Array.push method mutates the array by adding an element to it, so that when we log myWords we get the mutated array.

// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);
//this will log ['HELLO']
// Although myWords is assigned to an array, which is an object and therefore mutable, we're actually calling the toUpperCase() method on the string at index 0 of the array.
// Being primitive types, strings are immutable, so the method has no effect on the string (it instead returns a new string), and we're not mutating the array or changing the value at index 0.

// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);
//this will log ['HELLO']
// here we are mutating the array by changing the value at index 0. It's important to note that we aren't mutating the original string, but instead setting the value at index 0 to a new string returned by calling String.prototype.toUpperCase on the original string.