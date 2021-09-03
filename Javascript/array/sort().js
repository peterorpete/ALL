// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

////
//* Sort method example 1 - sorting strings
////
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

names.sort();
console.log(names);

////
//* Sort method example 2 - sorting strings
////
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

////
//* Sort method example 3 - sorting numbers
////
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

////
//* Sort method example 4 - sorting numbers
////
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort();
scores.sort((a, b) => {
 return b - a;
 // so 50 - 10 = 40. So B bigger than A as + value (50,10)
 // then 20 - 10 = 10. So B is still bigger than A as + value (50,20,10)
 // then 5 - 10 = -5. Finally that A is bigger than B so A stays where is (50,20,10,5)
 // then 35 - 5 = 30. Now B is bigger than A so B moves forwards (50,20,10,35,5)
 //  !but 35 is bigger than 10 too and 20 so loop has to go back around to test them?
 //
});
console.log(scores);

////
//* Sort method example 5 - sorting objects
////
const notes = [
 {
  title: "my next trip",
  body: "I would like to go to Spain",
 },
 {
  title: "Habbits to work on",
  body: "Exercise. Eating a bit better.",
 },
 {
  title: "Office modification",
  body: "Get a new seat",
 },
];

const sortNotes = function (notes) {
 notes.sort(function (a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
   return -1;
  } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
   return 1;
  } else {
   return 0;
  }
 });
};

sortNotes(notes);
console.log(notes);

////
//* Sort method example 6 - sorting objects
////

const players = [
 { name: "mario", score: 20 },
 { name: "luigi", score: 10 },
 { name: "chun-li", score: 50 },
 { name: "yoshi", score: 30 },
 { name: "shaun", score: 70 },
];

players.sort((a, b) => {
 if (a.score > b.score) {
  return -1;
 } else if (b.score > a.score) {
  return 1;
 } else {
  return 0;
 }
});

// different way of doing above because you get postivie and negative results that will help sort the scores.
// players.sort((a, b) => b.score - a.score);

console.log(players);
