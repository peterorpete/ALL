// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

/// add a new element
const newPara = document.createElement("h1");
newPara.textContent = "This is a new element from JavaScript";
document.querySelector("body").appendChild(newPara);

//////
