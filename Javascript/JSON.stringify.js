////
//* ! JSON.stringify()

//# convert array to json string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
////

const user = {
 name: "Pete",
 age: 22,
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);
