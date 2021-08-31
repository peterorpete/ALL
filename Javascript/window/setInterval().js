// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

let i = 0;

const timer = setInterval(function () {
 console.log(`hello ${i}`);
 i++;
 if (i === 10) {
  clearInterval(timer);
 }
}, 2000);
