document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("ul.border > li")
        .forEach(element => {
            element.style.border = "solid 1px red";
        });
});