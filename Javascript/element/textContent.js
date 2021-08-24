const ps = document.querySelectorAll("p");

ps.forEach(function (p) {
 p.textContent = "new text";
});

////

const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
 if (p.textContent.includes("the")) {
  p.remove();
 }
});
