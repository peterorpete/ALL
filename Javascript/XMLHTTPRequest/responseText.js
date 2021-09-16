//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
//The read-only XMLHttpRequest property responseText returns the text received from a server following a request being sent.

////
//* example 1
//# get text back from xmlhttprequest - request - xml
////

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
 if (request.readyState === 4) {
  console.log(request.responseText);
 }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
