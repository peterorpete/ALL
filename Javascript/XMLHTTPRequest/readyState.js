// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyStatereadyState
// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

////
//* example 1
////

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
 console.log(request, request.readyState);
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
