// Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function searchTheShortestWord(danishWords) {
    if (danishWords.length === 0) {
        return ' ';
    }
    let theShortestW = danishWords[0];
    for (let i = 1; i < danishWords.length; i++) {
        if (danishWords[i].length < theShortestW.length) {
            theShortestW = danishWords[i];
        }
    }
    return theShortestW;
}
console.log(searchTheShortestWord(danishWords));