//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//The Set object lets you store unique values of any type, whether primitive values or object references.

////
//* example 1
//https://scrimba.com/learn/introtoes6/sets-in-es6-cKLZQsD
////

const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);
