const firstString = 'ponyaaaaa';
const secondString = 'seryoga pirat';

const compareStringLength = (stringOne, stringTwo) => {
    // localCompare только на первый взгляд кажется верным решением, но это не так из-за специфики сравнения.
    // но localeCompare предназначен для сравнения строк в лексикографическом порядке, а не для сравнения их длины
    // например, "aaaa".localCompare("при") будет всегда возвращать 1
    if (stringOne.length > stringTwo.length) {
        return 1;
    } else if (stringOne.length < stringTwo.length) {
        return -1;
    } else {
        return 0;
    }
}

console.log(`Строки: ${firstString}, ${secondString}, compared: ${compareStringLength(firstString, secondString)}`);