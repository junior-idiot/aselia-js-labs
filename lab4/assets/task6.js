document.addEventListener("DOMContentLoaded", (event) => {
    const table = document.querySelector('#statsTable');
    const rowCount = table.rows.length;

    let sum = 0;

    for (let i = 1; i < rowCount; i++) {
        sum += parseFloat(table.rows[i].cells[1].innerText) || 0;
    }

    const result = document.querySelector('#output');

    result.textContent = sum;
    result.style.color = sum > 100 ? 'green' : 'red';
});