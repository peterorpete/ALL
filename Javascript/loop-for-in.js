// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

////
//*example 1
//# looping through objects
////

const objectExample = { a: 1, b: 2, c: 3 };

for (const property in objectExample) {
 console.log(`${property}: ${objectExample[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
