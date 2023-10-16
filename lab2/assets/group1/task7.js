let initialVolume = +prompt("Введите первоначальный объем воды (литры):");

if (isNaN(initialVolume) || initialVolume <= 10) {
    alert("Пожалуйста, введите корректный объем воды, больше 10 литров.");
} else {
    let days = 0;

    while (initialVolume > 10) {
        initialVolume *= 0.9;
        days++;
    }

    alert(`Воды хватит на ${days} дней.`);
}