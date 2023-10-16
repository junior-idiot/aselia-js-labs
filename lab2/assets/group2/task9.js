const mean = (...args) => {
    let meanValue = 0;
    let numCount = 0;

    args.map(value => {
        if ((+value instanceof Number || typeof value === 'number') && !isNaN(+value)) {
            numCount++;
            meanValue += value;
        }
    })

    return numCount > 0 ? meanValue / numCount : 0;
}

// mean(2, 10, 5, "true", false, NaN, null, undefined);
alert(mean(2, 10, "true", false, NaN, null, undefined));