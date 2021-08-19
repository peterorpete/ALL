////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//* includes()
////
let numArray = [1, 2, 3, 4, 5];

console.log(numArray.includes(2));

/////
//!example 2
/////

const listIngredients = ["flour", "sugar", "eggs", "butter"];

listIngredients.includes("chocolate");

/////
//!example 3
/////

const listIngredients = ["flour", "sugar", "eggs", "butter"];
console.log(listIngredients.includes("chocolate") ? "We are going to make a chocolate cake" : "We can't make a chocolate cake because we are missing the ingredient chocolate");
