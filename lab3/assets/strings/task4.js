const checkForSpam = (str) => {
    const spamWords = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх'];
    const lowercaseStr = str.toLowerCase();

    return spamWords.some(spamWord => lowercaseStr.includes(spamWord.toLowerCase()));
}

const phrases = [
    'Это предложение 100% БЕСПЛАТНО!',
    'Большие скидки только сегодня!',
    'Это надежная компания',
];

phrases.forEach((value) => {
    console.log(`Фраза: ${value}, это спам: ${checkForSpam(value)}`);
});