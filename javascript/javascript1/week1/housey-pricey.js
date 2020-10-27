/* Peter's house price calculation */
let width = 8;
let depth = 10;
let height = 10;
let volumeInMeters = width * depth * height;
console.log("Peter's house is " + volumeInMeters + " m3.");
let gardenSizeInM2 = 100;
totalPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Peter's house price is actually " + totalPrice);
let pricePeterPaid = 2500000;
let priceDifference = pricePeterPaid - totalPrice;
if (totalPrice < pricePeterPaid) {
    console.log("Peter is overpaying for his house " + priceDifference + ".");
}
else if (totalPrice > pricePeterPaid) {
    console.log("Peter is paying " + Math.abs(priceDifference) + " less than the actual price is.");
}
else {
    console.log("Peter is paying the correct price.");
}

/* Julia's house calculation */
width = 5;
depth = 11;
height = 8;
volumeInMeters2 = width * depth * height;
console.log("Julia's house is " + volumeInMeters2 + " m3.");
gardenSizeInM2 = 70;
totalPrice = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Julia's house price is actually " + totalPrice);
let priceJuliaPaid = 1000000;
priceDifference = priceJuliaPaid - totalPrice;
if (totalPrice < priceJuliaPaid) {
    console.log("Julia is overpaying for her house " + priceDifference + ".");
}
else if (totalPrice > priceJuliaPaid) {
    console.log("Julia is paying " + Math.abs(priceDifference) + " less than the actual price is.");
}
else {
    console.log("Julia is paying the correct price.");
}