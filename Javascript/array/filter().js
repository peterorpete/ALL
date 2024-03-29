// Filters items in an array based on true or false criteria and returns the new filtered items in a new array
//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//! https://www.udemy.com/course/modern-javascript/learn/lecture/9862376?
/////
const notes = [
 { title: "Go on holiday", body: "i would like to go to Spain" },
 { title: "Exercise", body: "Go for a job" },
 { title: "Learn", body: "Learn javascript more" },
];

const findNotesPlural = function (notes, searchText) {
 return (filtereddNotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLocaleLowerCase().includes(searchText);
  const isBodyMatch = note.body.toLocaleLowerCase().includes(searchText);
  return isTitleMatch || isBodyMatch; // returns true or false
 }));
};
console.log(findNotesPlural(notes, "go"));

////

let todos = [
 { text: "pick lidwina up at 1pm", complete: false },
 { text: "daily duolingo", complete: true },
 { text: "Buy rennies", complete: false },
 { text: "Do actual work", complete: false },
 { text: "Pressups", complete: false },
 { text: "wash clothes", complete: true },
];

const getThingsToDo = function (todos) {
 //filter takes a function as argument.
 return todos.filter(function (todo, index) {
  return !todo.complete; // returns all the false completed items
 });
};

console.log(getThingsToDo(todos));

////

const scores = [10, 30, 15, 25, 50, 40, 5];

// const highScores = scores.filter(score => score > 20);
// console.log(highScores);

const users = [
 { name: "shaun", premium: true },
 { name: "yoshi", premium: false },
 { name: "mario", premium: false },
 { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);
