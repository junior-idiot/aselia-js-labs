const fruits = [
    'банан',
    'ЯблОко',
    'Мандарин',
    'АПЕЛЬСИН',
    'грУша',
    'ананас',
    'папайя',
    'алыча',
    'амогус'
];

const searchFruit = 'ГРУША';

const findFruitIndex = (fruits, fruitToSearch) => {
    return fruits.findIndex(fruit => fruit.toLowerCase() === fruitToSearch.toLowerCase());
}

console.log(`Среди ${fruits.join(', ')} ищем ${searchFruit}. Вот его индекс: ${findFruitIndex(fruits, searchFruit)}`);