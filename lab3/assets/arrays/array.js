export const getArray = (n = 10) => {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 101)); // Добавляем случайное число от 0 до 100
    }
    return array;
}