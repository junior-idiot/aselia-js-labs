const distance = prompt("Введите расстояние между городами");
const hours = prompt("Введите за сколько часов вы хотите добраться");

if (distance && hours) {
    const speed = +distance / +hours;

    alert(`Ваша скорость будет ${speed.toFixed(2)} км/ч`);
}