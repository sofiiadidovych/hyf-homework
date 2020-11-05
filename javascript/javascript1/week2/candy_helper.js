let boughtCandyPrices = [];
function addCandy(candyType, weight) {
    let pricePerGram = 0;
    switch (candyType) {
        case 'Sweet':
            pricePerGram = 0.5;
            break;
        case 'Chocolote':
            pricePerGram = 0.7;
            break;
        case 'Toffee':
            pricePerGram = 1.1;
            break;
        case 'Chewing-gum':
            pricePerGram = 0.03;
            break;
        default:
            console.log('Wrong type, select something else');
    }
    let price = pricePerGram * weight;
    boughtCandyPrices.push(price);
}

let amountToSpend = Math.random() * 100;
let boughtCandy = [
    ['Sweet', 10],
    ['Chocolote', 20],
    ['Toffee', 15],
    ['Chewing-gum', 100],
];

function canBuyCandy() {
    for (let i=0; i < boughtCandy.length; i++) {
        let candy = boughtCandy[i];
        addCandy(candy[0], candy[1]);
    }
    let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice = totalPrice + boughtCandyPrices[i];
    }

    if (totalPrice >= amountToSpend) {
        console.log('Enough candy for you!');
    } else {
        console.log('You can buy more, so please do!');
    }
}

canBuyCandy();