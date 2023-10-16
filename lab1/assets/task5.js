const moneys = prompt("Сколько у вас денег? (в кошельке)");
const chocolatePrice = prompt("Сколько стоит шоколадка?");

if (moneys && chocolatePrice) {
    const chocolateCount = Math.floor(+moneys / +chocolatePrice);
    const change = +moneys % chocolatePrice;

    alert(`За сумму ${moneys} можно купить ${chocolateCount} шоколадок по цене ${chocolatePrice} сдача составляет ${change}`);
}