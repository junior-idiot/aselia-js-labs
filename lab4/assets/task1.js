document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("p.border")
        .forEach(element => {
            element.style.border = "solid 1px red";
        })
});