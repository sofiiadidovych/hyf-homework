// Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function searchTheShortestWord(danishWords) {
    if (danishWords.length === 0) {
        return ' ';
    }
    let theShortestWord = danishWords[0];
    for (let i = 1; i < danishWords.length; i++) {
        if (danishWords[i].length < theShortestWord.length) {
            theShortestWord = danishWords[i];
        }
    }
    return theShortestWord;
}
console.log(searchTheShortestWord(danishWords));