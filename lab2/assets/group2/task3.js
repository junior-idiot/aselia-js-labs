const createHeaders = (n) => {
    for (let i = 1; i <= n; i++) {
        document.writeln(`<h2>Header ${i}</h2>`);
    }
}

createHeaders(5);