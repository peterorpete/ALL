// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
////
//* shift examples 1
//# remove first
////
const friends = ["Michael", "Steven", "Peter"];

friends.shift(); // First
console.log(friends);

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
