const numbers = (...args) => {
    let numCount = 0;

    args.map(value => {
        if ((+value instanceof Number || typeof value === 'number') && !isNaN(+value)) {
            numCount++;
        }
    })

    return numCount;
}

// mean(2, 10, 5, "true", false, NaN, null, undefined);
alert(numbers(2, 10, "true", false, NaN, null, undefined));