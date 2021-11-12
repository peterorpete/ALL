//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected

////
//* example 1
////

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };
let bothObj = { ...obj1, ...obj2 };

// the duplicated foo will take the last spread element
console.log(bothObj); //{ foo: 'baz', x: 42, y: 13 }
