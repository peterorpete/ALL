// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

////
//* example of dice
//# random number
////

const dice1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const dice2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `You have rolled a ${dice1} and a ${dice2}. The sum to ${die1 + die2}`;
