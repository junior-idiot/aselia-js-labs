document.addEventListener("DOMContentLoaded", (event) => {
    const table = document.querySelector('#statsTable');
    const rowCount = table.rows.length;

    const totalRow = table.insertRow(rowCount);
    totalRow.insertCell(0).innerText = 'Итого';
    const totalCell1 = totalRow.insertCell(1);
    const totalCell2 = totalRow.insertCell(2);

    let sumColumn2 = 0;
    let sumColumn3 = 0;

    for (let i = 1; i < rowCount; i++) {
        sumColumn2 += parseFloat(table.rows[i].cells[1].innerText) || 0;
        sumColumn3 += parseFloat(table.rows[i].cells[2].innerText) || 0;
    }

    totalCell1.innerText = sumColumn2;
    totalCell2.innerText = sumColumn3;

    const result = document.querySelector('#result');

    result.textContent = `Отдел ${+(sumColumn2 < sumColumn3)+1} сделал больше продаж`;

    /*if (sumColumn2 > sumColumn3) {
        result.textContent = `Отдел 1 сделал больше продаж`;
    } else {
        result.textContent = `Отдел 2 сделал больше продаж`;
    }*/
});