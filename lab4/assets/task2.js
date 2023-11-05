import {getRandomColor} from "./functions.js";

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("p")
        .forEach(element => {
            element.style.border = `solid 1px ${getRandomColor()}`;
        });
})