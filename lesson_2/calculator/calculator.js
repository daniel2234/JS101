// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
//Number.isNan() method takes any Javascript value and
//returns boolean true if the value is NaN false if it is not
//We check whether Number(number) is NaN
//since calling Number() on a non-numeric string evaluates to NaN.
//Thus, number is invalid if the conversion results in NaN.
//Note that Number() ignores leading whitespace in the number string,
// so Number(' 34') returns 34.
//Number('') returns 0
//
function validateYes(word) {
  return word.toLowerCase();
}

let languageSelected = 'en';

prompt(MESSAGES[languageSelected]["welcome"]);
prompt(MESSAGES[languageSelected]["welcome"]);

let lastResponse;
do {
  prompt(MESSAGES[languageSelected]["firstNumber"]);
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt('Hmm... this does not look like a valid number.');
    firstNumber = readline.question();
  }

  prompt(MESSAGES[languageSelected]["secondNumber"]);
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt('Hmm... this does not look like a valid number.');
    secondNumber = readline.question();
  }

  prompt(MESSAGES[languageSelected]["choose"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[languageSelected]["constraints"]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  prompt(output);
  prompt(MESSAGES[languageSelected]["playAgain"]);
  let lastResponse = readline.question();

} while (validateYes(lastResponse) === 'yes' || validateYes(lastResponse) === 'y');

//Asking the user for another calculation
//Currently, our calculator asks the user for two numbers and an operation
//and then exits after displaying the result.
//Wouldn't it be nice if we could ask the user if they wanted
//to perform another calculation and start a new calculation
//when they respond with yes?