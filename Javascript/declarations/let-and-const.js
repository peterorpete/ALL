// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

const example = 5;
example = 10; // error as you cannot   a const.
console.log(example);

////

const example = [];
example.push(5); // you can update const arrays, and objects
console.log(example);
