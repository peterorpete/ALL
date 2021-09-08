// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_declarations
// * Classes are a template for creating objects.
// They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

/////
//* example of a class and a sub class
//# templates, reusable,
////

class Player {
 constructor(name, country) {
  this.name = name;
  this.country = country;
 }
 introduce() {
  console.log(`${this.name} was born in ${this.country}! 🧡`);
 }
}
Player.introduce;

const Messi = new Player("Messi", "Argentina");
const Foden = new Player("Foden", "England");
const Pele = new Player("Pele", "Brazil");
Messi.introduce(); //Messi was born in Argentina! 🧡
Pele.introduce(); //Pele was born in Brazil! 🧡
Foden.introduce(); //Foden was born in England! 🧡
console.log(Foden); //Player {name: "Foden", country: "England"}

class TennisPlayer extends Player {
 constructor(name, country, age) {
  super(name, country); // Super basically copies the orginal classes this.name etc etc
  this.age = age;
 }
 playTennis() {
  console.log(`${this.name} is ${this.age} years old and knows how to play Tennis. 🎾`);
 }
}
const EmmaRaducanu = new TennisPlayer("Emma Raducanu", "Canada 🇨🇦", 18);

EmmaRaducanu.playTennis(); //Emma Raducanu is 18 years old and knows how to play Tennis. 🎾
EmmaRaducanu.introduce(); //Emma Raducanu was born in Canada 🇨🇦! 🧡
