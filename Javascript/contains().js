// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

////
//* example where it searches if what is clicked contains a class of delete, and if it does it deletes is parent container.
// #removes #delete #bin
////
list.addEventListener("click", (e) => {
 if (e.target.classList.contains("delete")) {
  console.log("trash can clicked");
  e.target.parentElement.remove();
 }
});
