const firstNum = +prompt("Введите число x:");
const secondNum = +prompt("Введите число y:");

if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Пожалуйста, введите корректные числовые значения.");
} else {
    if (firstNum > secondNum) {
        alert("x > y");
    } else if (firstNum < secondNum) {
        alert("x < y");
    } else {
        alert("x = y");
    }
}