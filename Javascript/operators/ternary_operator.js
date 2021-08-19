function getFee(isMember) {
 return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

////
//! example 2
////

/*
 ** includes() Challenge
 * You want to make a chocolate cake
 * And you have a list of ingredients represented with an array
 * Using the JavaScript includes() function
 * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
 * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
 */

const listIngredients = ["flour", "sugar", "eggs", "butter"];
console.log(listIngredients.includes("chocolate") ? "We are going to make a chocolate cake" : "We can't make a chocolate cake because we are missing the ingredient chocolate");
