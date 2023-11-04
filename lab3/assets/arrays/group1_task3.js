import {getArray} from "./array.js";

const randomArray = getArray();

const getSumFromArray = (array) => {
    return array.reduce((sum, current) => sum + current, 0);
}

console.log(`Массив: ${randomArray.join(', ')}, сумма всех элементов: ${getSumFromArray(randomArray)}`);
