
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.



////
//*  examples 1
//# 
////

let fruits = ['Apple', 'Banana']
console.log(fruits.length) // 2
console.log(fruits[0]) // Apple
console.log(fruits[1]) // Banana
fruits[2] = "Pear";
console.log(fruits);
///

////
//*  examples 2
//# if one thing is true do something
////

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
