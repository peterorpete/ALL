//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
// The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.

////
//* ! examples 1
//# Not logical operator - isnt - is not
////

const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// expected output: false
