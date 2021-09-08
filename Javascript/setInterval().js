// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

////
//* example where it calls a function that counts up to 10 every 2 seconds
//# timer - counter - seconds - count - window
////

let i = 0;

const timer = setInterval(function () {
 console.log(`hello ${i}`);
 i++;
 if (i === 10) {
  clearInterval(timer);
 }
}, 2000);
