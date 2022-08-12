const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let translateInNum = [];

    let defaultSymbol = {
        '00': '',
        '10': '.',
        '11': '-',
    }

    for (let i = 0; i < expr.length; i += 10) {
        let decoderTens = expr.slice(i, i + 10);

        let doubleLetterInNum = [];
        for (let i = 0; i < 10; i += 2) {
            doubleLetterInNum.push(decoderTens.slice(i, i + 2));
        }
        translateInNum.push(doubleLetterInNum);
    }

    let translateInMorse = [];

    for (let elem of translateInNum) {
        let morseLetter = '';
        elem.forEach(symbol => {
            if (symbol in defaultSymbol) {
                morseLetter += defaultSymbol[symbol];
            } else {
                morseLetter += '';
            }
        });
        translateInMorse.push(morseLetter);
    }

    let translate = '';

    translateInMorse.forEach(symbol => {
        if (symbol in MORSE_TABLE) {
            translate += MORSE_TABLE[symbol];
        } else {
            translate += ' ';
        }
    });

    return translate;
}

module.exports = {
    decode
}
