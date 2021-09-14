// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

////
//* unshift examples 1
//# add to beginning - add to start
////
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
