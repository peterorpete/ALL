// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

////
// * example 1
////

let str = "";

//i is 0, if i is less than 9 add one to i, repeat
for (let i = 0; i < 9; i++) {
 str = str + i;
}

console.log(str);
// expected output: "012345678"

////
// * example 2 - Loop through arrays
//# loop through arrays
////
let cards = [1, 6, 19, 47, 43];

for (let i = 0; i < cards.length; i++) {
 console.log(cards[i]);
}

////
// * example 3 - Loop through arrays to make a sentence
//# sentence from array, make a array one string
////
let sentence = ["Hello ", "my ", "name ", "is ", "Peter"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
 greetingEl.textContent += `${sentence[i]} `;
}
