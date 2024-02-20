function ejercicio(word) {
    console.log(word);
    switch (word) {
        case 'hola':
            return 1;
            break;
        case 'pico':
            return 2;
            break;
        case 'mama':
            return 3;
            break;
        default:
            return 4;
            break;
    }
}

function reverseWord(word) {
    console.log(word);
    const wordAsArray = word.split('');
    let reverseWord = [];
    for (let i = wordAsArray.length - 1; i >= 0; i--) {
        reverseWord.push(wordAsArray[i]);
    }
    return reverseWord.join('');
}
const hola = reverseWord('hola mundo');
console.log(hola);