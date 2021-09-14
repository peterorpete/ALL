// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

////
//* Sort method example 1 - sorting strings
////
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

names.reverse();
console.log(names);

names.sort(); // if you sort first then reverse it will arrang alphabetically but other way around
names.reverse();
console.log(names);
