//declaring and initialize the variable
let answerToUltimateQuestion = 42;

//defining the function
function fourScoreAndSevenYearsAgo() {
  //do something
}

//defining the function
function DomesticCat(name) {
  //do something
}

let cat = new DomesticCat('Fluffy');

const INTEREST_RATE = 0.0525;
const FOUR = 'four';


// bad
function test(){
  // do something
 }
 
 // bad
 function test ()
 {
   // do something
 }
 
 // bad
 if (foo === bar){
   // do something
 }
 
 // bad
 while (foo !== bar)
 {
   // do something
 }
 
 // good
 function test() {
   // do something
 }
 
 // good
 if (foo === bar) {
   // do something
 }
 
 // good
 while (foo !== bar) {
   // do something
 }

// bad
let sum=x+5;

// good
let sum = x + 5;