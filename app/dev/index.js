//https://medium.com/@larrybotha/great-article-4d0eb79a61a6
if (module.hot) {
    module.hot.accept();
}

document.addEventListener("click", function () {
    let newDiv = document.createElement("div");
    newDiv.className = "cyan";
    document.body.appendChild(newDiv);
});