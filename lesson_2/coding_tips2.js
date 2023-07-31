const readline = require('readline-sync');

console.log("Enter your name");
let name = readline.question();

while (name.trim() === '') {
  console.log("That's an invalid name. Try again.");
  name = readline.question();
}

console.log(`Welcome ${name}`);
console.log("What could you like to do?");