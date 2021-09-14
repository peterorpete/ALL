let nav = document.querySelector(".nav");
let dropDowns = Array.from(document.querySelectorAll(".dropdown"));

let status = document.querySelector("#status");

nav.addEventListener("mouseenter", (e) => {
 console.log("1");
 dropDowns.forEach((dropDown) => {
  console.log(dropDown);
  dropdown.addEventListener("mouseenter", (e) => {
   if (dropdown.classList.contains("closed")) {
    dropdown.classList.remove("closed");
    status.innerHTML = "OPEN";
   }
  });
 });

 // dropdown.addEventListener("mouseleave", (e) => {
 //  if (!dropdown.classList.contains("closed")) {
 //   dropdown.classList.add("closed");
 //   status.innerHTML = "CLOSED";
 //  }
 // });
});
