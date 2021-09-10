//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the && operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

////
//* && examples 1
//# and logical operator
////

1 <= 4 && "a" === "a"; //true
9 < 10 && 9 >= 9; //false

////
//* && example 2
//# password checker
////

const mystery = "Password7";

if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
 console.log("YOU GOT IT!!!");
}
