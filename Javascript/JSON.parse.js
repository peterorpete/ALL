////
//* ! JSON.parse()
//# convert json string back to array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
////

const user = {
 name: "Pete",
 age: 22,
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);
