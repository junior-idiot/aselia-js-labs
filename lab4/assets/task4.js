import {getRandomColor} from "./functions.js";

document.addEventListener("DOMContentLoaded", (event) => {
    const color = getRandomColor();

    document.querySelector("#color-sample").style.backgroundColor = color;
    document.querySelector("#color-text").textContent = color;
});