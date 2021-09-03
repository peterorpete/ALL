////
//* Map method example 1
////

let todos = ["pick lidwina up at 1pm", "daily duolingo", "wash clothes", "clean office"];

todos = todos.map((str, index) => ({ text: str, complete: false }));
console.log(todos);

////
//* Map method example 2
////
const prices = [20, 10, 3024, 15, 40, 85, 5];

const salePrices = prices.map((price) => {
 return price / 2;
});

console.log(salePrices);

////
//* Map method example 3
// https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14241186
////

const products = [
 { name: "gold star", price: 20 },
 { name: "mushroom", price: 40 },
 { name: "green shells", price: 30 },
 { name: "banana skin", price: 10 },
 { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
 if (product.price > 30) {
  return { name: product.name, price: product.price / 2 };
 } else {
  return product;
 }
});
console.log(saleProducts);
