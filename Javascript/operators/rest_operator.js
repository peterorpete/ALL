// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

//if you want a function and you dont know how many values are going to added, it then allows creates an array of arguments.
function add(...nums) {
 console.log(nums);
}

add(4, 5, 7, 8, 12);

///

function myFun(...manyMoreArgs) {
 console.log("manyMoreArgs", manyMoreArgs);
}

// Console Output:
// manyMoreArgs, ["three", "four", "five", "six"]
