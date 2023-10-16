const USD_EYR_RATE = 0.95;

const dollar = prompt("Введите количество долларов");

if (dollar) {
    const euro = +dollar * USD_EYR_RATE;
    alert(`Вы получите ${euro} евро`);
}