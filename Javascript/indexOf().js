//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

////
//* array example
//# How to find a item in a array - how to find if item exists in a array
////

const friends = ["Michael", "Steven", "Peter"];

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

////
//* string example
//# find letter in a string - find if item contains
////

//indexOf returns the index where the character is found (or -1 if not found)
"spider".indexOf("i"); //2
"vesuvius".indexOf("u"); //3 - only returns FIRST matching index
"cactus".indexOf("z"); //-1 not found
