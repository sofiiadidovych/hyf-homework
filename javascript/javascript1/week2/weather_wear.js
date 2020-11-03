function getProperClothes(temperature) {
    let clothesToWear;
    if (temperature <= -10) {
        clothesToWear = 'Put on some very warm parka, boots, scarf, hat and gloves';
    } else if (temperature <= 0) {
        clothesToWear = 'Put on coat, boots, scarf and hat';
    } else if (temperature <= 10) {
        clothesToWear = 'Put on jacket, boots and if you like - some scarf';
    } else if (temperature <= 30) {
        clothesToWear = 'Put on pants, t-shirt and take sweater just in case';
    } else {
        clothesToWear = 'You can just wear some flowers in your hair';
    }
    return clothesToWear;
}
console.log(getProperClothes(-100));
console.log(getProperClothes(0));
console.log(getProperClothes(10));
console.log(getProperClothes(30));
console.log(getProperClothes(100));
