const CURRENT_YEAR = 2023;
// const CURRENT_YEAR = new Date(Date.now()).getFullYear();

const birthdayYear = prompt("Введите ваш год рождения");

if (birthdayYear) {
    const year = CURRENT_YEAR - +birthdayYear;
    alert(`Вам ${year}`);
}