import {getArray} from "./array.js";

const arrayOne = getArray(5);
const arrayTwo = getArray(5);

const mergeUnique = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    const uniqueElements = new Set(combinedArray);
    return [...uniqueElements];
}

console.log(`Массивы ${arrayOne.join(', ')} и ${arrayTwo.join(', ')}, новый уникальный массив: ${mergeUnique(arrayOne, arrayTwo).join(', ')}`);