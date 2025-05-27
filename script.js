const MIN_LENGTH = 4;
var lettersCount = 0;

function buildWords() {
    document.getElementById('ready').innerHTML = '';

    var lettersText = document.getElementById('letters').value;
    var mustLetter = document.getElementById('mustLetter').value;
    console.log(`lettersText: ${lettersText}`);
    console.log(`mustLetter: ${mustLetter}`);
    
    let letters = lettersText.split(' ');
    lettersCount = letters.length;

    for (let len = MIN_LENGTH; len <= lettersCount; len++) { // length of words 4..9
        createWordsOfGivenLength(len, letters, mustLetter);
    }
    document.getElementById('ready').innerHTML = 'Valmis!';
}

function createWordsOfGivenLength(wordLength, letters, mustLetter) {
    let wordLettersArr = new Array(wordLength);
    let usedLetterIndexes = new Set();
    addLetterAtIndex(wordLettersArr, 0, wordLength, letters, usedLetterIndexes, mustLetter);
}

function addLetterAtIndex(wordLettersArr, letterIndex, wordLength, letters, usedLetterIndexes, mustLetter) {
    if (letterIndex < wordLength) {
        for (let index = 0; index < lettersCount; index++) {
            if (!usedLetterIndexes.has(index)) {
                usedLetterIndexes.add(index);
                wordLettersArr[letterIndex] = letters[index];
                if (letterIndex == wordLength - 1 && wordLettersArr.includes(mustLetter)) {
                    printWord(wordLettersArr, wordLength, mustLetter);
                }
                addLetterAtIndex(wordLettersArr, letterIndex + 1, wordLength, letters, usedLetterIndexes, mustLetter);
                usedLetterIndexes.delete(index);
            }
        }
    }
}

function printWord(wordLettersArr, wordLength, mustLetter) {
    let word = wordLettersArr.join('');
    document.getElementById('words').value += word + '\n';
}
