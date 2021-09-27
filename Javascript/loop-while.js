// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

////
// * example 1
////

let count = 0;

while (count < 10) {
 console.log(count);
 count++;
}

////
// * example 2
////

const secret = "BabyHippo";

let guess = prompt("enter the secret code");
while (guess !=== secret) {
  guess = prompt('enter the secret code...')
}
console.log('congrats!! you got the secret'); // this while never show until the while loop has succeeded


////
// * example 3
//# guessing game, guess the number
////
let maximum = parseInt(prompt("enter the maximum number!"));
while (!maximum) {
 maximum = parseInt(prompt("Please enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("enter your first guess!");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
 console.log(`current guess: ${attempts}`);
 attempts++;

 if (guess === "q") {
  break;
 }
 if (guess > targetNum) {
  guess = parseInt(prompt(`Too high, guess again! You have guessed ${attempts} times`));
 } else {
  guess = parseInt(prompt(`Too low, guess again! You have guessed ${attempts} times`));
 }
}
if (guess === "q") {
 console.log("You quit");
} else {
 console.log(`you got it! It took ${attempts} attempts`);
}
