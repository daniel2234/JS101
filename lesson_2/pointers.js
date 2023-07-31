// Question 1
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

//This logs the string 'Hello' twice

// The myWord variable is initialized to the string 'Hello'
// On line 2, we assign myOtherWord to myWord
// At this point, both variables point to a string with value of 'Hello',
// It's important to note though, even though the strings have the same value they are different string stored at different memory address

// Question 2
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello'; 
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

//This logs the string 'Goodbye' and then the string 'Hello'

//This very similar to Exercise 1 with one key difference: on line 3 we reassign myWord to the string 'Goodbye', As with Example 1. when we reach line 2 both variables are pointing to a string with the value of 'Hello', but these strings exists at different addresses in memory, By reassigning the myWord variable on line 3, we are changing what is storea at the memoery address myWord points to.

// Question 3
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords); //this logs ['Hi','Goodbye']
console.log(myOtherWords); //['Hi', 'Goodbye'];


//this logs ['Hi', 'Goodbye'] twice

//in some ways this looks similar to Exercise 2
//There are a couple of key differences though:

//1 The fact the myWords is initialized to an array , which is reference type
//2 What we then do with myWords on line 3

//with reference types, the value stored in memory that the variable points to is reference to another location in memory.
// After line 2, both variables have as their value the memory address where the array is stored.

// On line 3, we're not reassigning the myWords variable, instead we're changing the value of one of the array elements taht the myWords variable references

//Because we've changes, or mutated, the array, and because both variables reference the same array, when we log both variables we get the same output


// Question 4
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords); //this logs ['Hi', 'Bye']
console.log(myOtherWords); //this logs ['Hello', 'Goodbye']

//we're again dealing with a reference type
//Again, after line 2, both variables have as their value the memory address where the array is stored
//In this exercise though, line 3 reassigns the myWords variable to a different value
//in this case we're reassigning it to another array, but we could equally have reassigned it to a primitive value
//the important point is that the variable now points to a different value and so the two variable no longer have the same value (the memory address where ['Hello','Goodbye'] array is stored). When we log each variable, different values are therefore output


// Question 5
// What will the following code log to the console and why? Don't run it until you have tried to answer.
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords); //['Hi','Goodbye']
console.log(myWord); //'Hello'

// On line 1 we declare and initialize the variable myWords to an array containing two elements, the strings 'Hello' and 'Goodbye'.
// On line 2 we declare and initialize another variable, myWord, to the element at index 0 of the array referenced by myWords, which is the string 'Hello'. Because that string is a primitive type, index 0 of the array and the myWord variable each reference different strings at different memory addresses, even though those strings have the same value.
// On line 3 we reassign index 0 of the myWords array to a new value, the string 'Hi'. This changes the value stored at index 0 of the array, but has no effect on the value stored by the myWord variable.
// When we log the value of myWords and myWord on line 5 and 6, we can see that the myWords array has the string 'Hi' at index 0 and myWord has a value of 'Hello'.



// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords); //['Hi', 'Goodbye']
console.log(myWord); // Hello

//This logs the array [ 'Hi', 'Goodbye' ], and then the string 'Hello'.

// This is similar to the previous exercise, but in reverse. We again begin with a myWords initialized to an array containing two elements, the strings 'Hello' and 'Goodbye'. In this case though we assign myWord to the string 'Hi', and then set the element at index 0 of the myWords array to the value of myWord before reassigning myWord to the string 'Hello'.

// The principles at work are the same in both exercises. The values we are dealing with are primitives, and the value of these primitive values are stored at different memory addresses. Changing the value of one does not affect the other.