// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
// *example 1
////

const leadSinger = (artist = "someone") => {
 console.log(`${artist} is the lead singer of Cold Play`);
};

leadSinger();

////
// *example 2
////
let goingToBuy = (food = "something") => {
 console.log(`"I'm going to buy ${food} from the grocery shop"`);
};

goingToBuy("milk");
goingToBuy();
