//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

////
//* simple example
//# Replace - find - swap
////
// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"

////
//* Example with regex
//# how to replace a word in a string - swap - change
////

const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
