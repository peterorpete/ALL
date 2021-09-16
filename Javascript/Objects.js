// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
// - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

// An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) Let's work through an example to understand what they look like.

// Objects - store data in-depth - composite / complex data type

////
//* object example 1
////

const person = {
 name: ["Bob", "Smith"],
 age: 32,
 gender: "male",
 interests: ["music", "skiing"],
 bio: function () {
  alert(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. He likes " + this.interests[0] + " and " + this.interests[1] + ".");
 },
 greeting: function () {
  alert("Hi! I'm " + this.name[0] + ".");
 },
};

console.log(person.age); //32
console.log(person["age"]); //32

person.newThing = "new thing here";
console.log(person.newThing); // new thing here

person.gender = "female";
console.log(person.gender); // female

////
//* object example 2
////

const restaurant = {
 name: "Ichiran Ramen",
 address: `78 Johnson Ave`,
 city: "Brooklyn",
 state: "NY",
 zipcode: "11206",
};

let fullAddress = restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode;

////
//* object example 3
////

let castle = {
 title: "Live like a king in my castle",
 price: 190,
 isSuperHost: true,
 images: ["img/castle1.png", "img/caste2.png"],
};

console.log(castle.price);
console.log(castle.isSuperHost);

////
//* object example 4
////

let person = {
 name: "Per",
 age: 35,
 country: "Norway",
};

function logData() {
 console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData();
