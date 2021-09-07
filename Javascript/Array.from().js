// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

////
//* example where it collects the children from a todos conainter, convert the HTMLCollection into an array so they can be filtered and run a forEach over them
// #filter #convert to array
////
const list = document.querySelector(".todos");
console.log(list.children); //current HTMLCollection so cant do much on them.

const filterTodos = (term) => {
 //  console.log(Array.from(list.children));
 Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term.toLowerCase()))
  .forEach((todo) => todo.classList.add("filtered"));
 Array.from(list.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(term.toLowerCase()))
  .forEach((todo) => todo.classList.remove("filtered"));
};

searchInput.addEventListener("keyup", (e) => {
 const term = searchInput.value.trim();
 filterTodos(term);
});
