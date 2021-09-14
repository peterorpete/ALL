// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

////
//* pop example 1
//# remove on end - delete -
////

const friends = ["Michael", "Steven", "Peter"];

friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

////
//* pop example 2
//#
////

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
