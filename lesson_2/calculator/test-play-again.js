//experimented with a do while loop to end calculator app with a conditional
let readline = require('readline-sync');

function prompt(message) {
  console.log(`=>${message}`);
}

function validateYes(word) {
  return word.toLowerCase();
}

let lastResponse;
prompt("Welcome to my game!");

do {
  prompt("What is your name?");
  let firstResponse = readline.question();
  prompt(firstResponse);


  prompt("Would you like to play again (yes/no)??");
  lastResponse = readline.question();
  console.log(lastResponse, 'play again response');

} while (validateYes(lastResponse) === 'yes' || validateYes(lastResponse) === 'y');