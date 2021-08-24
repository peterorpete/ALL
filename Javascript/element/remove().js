// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const p = document.querySelector("p");
p.remove();

////////////

const ps = document.querySelectorAll("p");

ps.forEach(function (p) {
 p.remove();
});
