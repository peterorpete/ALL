// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset

////
//* example where it clears the forms input after submitted
//# removes - delete - clear form
////
addForm.addEventListener("submit", (e) => {
 e.preventDefault();
 const todo = addForm.add.value.trim();
 if (todo.length) {
  generateTemplate(todo);
 }
 addForm.reset(); // clears the previous forms input
});
