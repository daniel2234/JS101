//this is the rock paper scissors lizard spock game
//Lizard Spock This game is a variation on the Rock Paper Scissors game
//that adds two more options - Lizard and Spock.
//The full explanation and rules are here -> https://web.archive.org/web/20181217114425/http://www.samkass.com/theories/RPSSL.html
//There's also a hilarious Big Bang Theory video about it. -> https://www.youtube.com/watch?v=x5Q6-wMx-K8&ab_channel=Wozamil

// The goal of this bonus is to add Lizard and Spock to your game.


// Shortened Input Typing the full word "rock" or "lizard" is tiring.
//Update the program so the user
//can type "r" for "rock," "p" for "paper," and so on.
//Note that if you do bonus #1,
//you'll have two words that start with "s." How do you resolve that?


//Best of 5 Keep score of the player's and computer's wins.
//When either the player or computer reaches three wins,
//the match is over, and the winning player becomes the grand winner.
//Don't add your incrementing logic to displayWinner.
//Keep your functions simple;
//they should perform one logical task — no more, no less.


//ESLint complaints
//Run your program through ESLint to see
//what problems it identifies, and try to fix them.


//Consider asking for a code review
//Be sure to ask questions about
//any part of your code that you're uncertain about.


const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'scissors', 'paper', 'lizard', 'spock'];


function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let playerChoice = readline.question();

