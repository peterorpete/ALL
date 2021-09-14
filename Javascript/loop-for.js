// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

////
// * example 1
////

let str = "";

//i is 0, if i is less than 9 add one to i, repeat
for (let i = 0; i < 9; i++) {
 str = str + i;
}

console.log(str);
// expected output: "012345678"
