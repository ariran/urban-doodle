function buildWords() {
    console.log('Building ...');
    var lettersText = document.getElementById('letters').value;
    var mustLetter = document.getElementById('mustLetter').value;
    console.log(`lettersText: ${lettersText}`);
    console.log(`mustLetter: ${mustLetter}`);
    
    let letters = lettersText.split(' ');
    for (const l of letters) {
        addText(l);
    }
}

function addText(newText) {
    document.getElementById("words").value += (newText + '\n');
}