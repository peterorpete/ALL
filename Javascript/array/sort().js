// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

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
