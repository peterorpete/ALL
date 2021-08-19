// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

const leadSinger = (artist = "someone") => {
 console.log(`${artist} is the lead singer of Cold Play`);
};

leadSinger();
