// Find and count the Danish letters
const danishString = 'Jeg har en blå bil';
const danishString2 = 'Blå grød med røde bær';

function sumDanishLetters(str) {
    let result = { total: 0 };
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'å' || str[i] === 'ø' || str[i] === 'æ') {
            if (str[i] in result) {
                result[str[i]] += 1;
            } else {
                result[str[i]] = 1;
            }
            result.total +=1;
        }
    }
    return result;
}

console.log(sumDanishLetters(danishString));
console.log(sumDanishLetters(danishString2));