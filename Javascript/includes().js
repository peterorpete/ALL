//https://www.w3schools.com/jsref/jsref_includes.asp

////
//* example where it finds a word in a string
//# find a word
////

let str = "Hello world, welcome to the universe.";
str.includes("world"); // Returns true

/////
//* example where it does through all p tags and removes any that contains the word the
//# find a word
////

const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
 if (p.textContent.includes("the")) {
  p.remove();
 }
});
