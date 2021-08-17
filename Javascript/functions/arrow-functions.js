// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//function declaration
function breakfastMenu() {
 return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
 return "I'm going to eat pizza for lunch";
};

//Arrow function
const dinnerMenu = (food) => {
 return `I'm going to eat a ${food} for dinner`;
};

//! const dinnerMenu = food => `I'm going to eat a ${food} for dinner`; //shorter version if return is on one line and one parameter

console.log(dinnerMenu("chicken salad"));
