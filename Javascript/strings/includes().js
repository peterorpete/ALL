//https://www.w3schools.com/jsref/jsref_includes.asp

let str = "Hello world, welcome to the universe.";
str.includes("world"); // Returns true

////

const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
 if (p.textContent.includes("the")) {
  p.remove();
 }
});
