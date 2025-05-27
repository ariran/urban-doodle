const LETTERS_COUNT = 9;
const MIN_LENGTH = 4;

function buildWords() {
    var lettersText = document.getElementById('letters').value;
    var mustLetter = document.getElementById('mustLetter').value;
    console.log(`lettersText: ${lettersText}`);
    console.log(`mustLetter: ${mustLetter}`);
    
    let letters = lettersText.split(' ');

    for (let len = MIN_LENGTH; len <= LETTERS_COUNT; len++) { // length of words 4..9
        createWordsOfGivenLength(len, letters, mustLetter);
    }
}

function createWordsOfGivenLength(wordLength, letters, mustLetter) {
    let wordLettersArr = new Array(wordLength);
    let usedLetterIndexes = new Set();
    addLetterAtIndex(wordLettersArr, 0, wordLength, letters, usedLetterIndexes, mustLetter);
}

function addLetterAtIndex(wordLettersArr, letterIndex, wordLength, letters, usedLetterIndexes, mustLetter) {
    if (letterIndex < wordLength) {
        for (let index = 0; index < LETTERS_COUNT; index++) {
            if (isUnusedLetterIndex(index, usedLetterIndexes)) {
                usedLetterIndexes.add(index);
                wordLettersArr[letterIndex] = letters[index];
                printWord(wordLettersArr, wordLength, mustLetter);
                addLetterAtIndex(wordLettersArr, letterIndex + 1, wordLength, letters, usedLetterIndexes, mustLetter);
                usedLetterIndexes.delete(index);
            }
        }
    }
}

function isUnusedLetterIndex(index, usedLetterIndexes) {
    return !usedLetterIndexes.has(index);
}

function printWord(wordLettersArr, wordLength, mustLetter) {
    let word = wordLettersArr.join('');
    if (word.length == wordLength && word.includes(mustLetter)) {
        console.log(word);
        document.getElementById('words').value += word + '\n';
    }
}
