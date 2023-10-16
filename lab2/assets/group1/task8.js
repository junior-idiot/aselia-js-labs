//https://docs.google.com/document/d/1-1D28VVD-oc8rDHGB4r4ODGBGe1b1Asurl9QNgRjQGM/edit?usp=sharing
const annualRate = parseFloat(prompt("Введите годовую процентную ставку (в процентах):"));

if (isNaN(annualRate) || annualRate <= 0) {
    alert("Пожалуйста, введите корректную процентную ставку.");
} else {
    let rateDecimal = annualRate / 100;

    let years = Math.log(2) / Math.log(1 + rateDecimal);

    alert(`Ваш вклад удвоится через ${years.toFixed(2)} лет.`);
}