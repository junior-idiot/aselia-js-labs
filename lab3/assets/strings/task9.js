const averageWordLength = (sentence) => {
    const words = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);

    if (words.length === 0 || (words.length === 1 && words[0] === '')) {
        return 0;
    }

    const totalLength = words.reduce((total, word) => total + word.length, 0);

    return totalLength / words.length;
}

const sentence = 'Это предложение для теста.';

console.log(`${sentence}, средняя длина слова: ${averageWordLength(sentence)}`);