const digit = prompt("Введите цифру:");

if (!digit || digit < 0 || digit > 9 || digit.includes('.')) {
    alert("Не цифра");
} else {
    switch (+digit) {
        case 0:
            alert("ноль");
            break;
        case 1:
            alert("единица");
            break;
        case 2:
            alert("двойка");
            break;
        case 3:
            alert("тройка");
            break;
        case 4:
            alert("четверка");
            break;
        case 5:
            alert("пятерка");
            break;
        case 6:
            alert("шестерка");
            break;
        case 7:
            alert("семерка");
            break;
        case 8:
            alert("восьмерка");
            break;
        case 9:
            alert("девятка");
            break;
        default:
            alert("Не цифра");
    }
}