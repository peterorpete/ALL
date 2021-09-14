// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

////
//* push example 1
//# add to end of array
////

const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

////
//* push example 2
////

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
