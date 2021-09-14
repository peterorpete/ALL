//https://www.w3schools.com/jsref/jsref_concat_array.asp

////
//* example where it searches if what is clicked contains a class of delete, and if it does it deletes is parent container.
//# combines - how to merge two arrays -
////
const arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
