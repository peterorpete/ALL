////
// * Promises
// From this lesson: https://scrimba.com/learn/introtoes6/promises-cRDZ29H4
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
////

const buyFlightTicket = () => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const error = true;

   if (error) {
    reject("Sorry your payment was not successful");
   } else {
    resolve("Thank you, your payment was successful");
   }
  }, 3000);
 });
};

buyFlightTicket()
 .then((success) => console.log(success))
 .catch((error) => console.log(error));
