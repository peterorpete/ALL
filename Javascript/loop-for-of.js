// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

////
//*example 1
////

const array1 = ["a", "b", "c"];

for (const element of array1) {
 console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

////
//*example 2
// # loop though array of number and print the square root of that number
////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
 console.log(number * number);
}
