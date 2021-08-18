const article = document.querySelector("article");

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach((child) => {
 child.classList.add("article-element");
});
