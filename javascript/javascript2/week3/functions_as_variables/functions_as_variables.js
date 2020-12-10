// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function logOutColor() {
    const colors = ['red', 'yellow', 'blue', 'green', 'coral'];
    console.log(colors[getRandomInt(colors.length)]);
}

function logOutFruit() {
    const fruits = ['cherry', 'pear', 'apple', 'apricot', 'persimmon']
    console.log(fruits[getRandomInt(fruits.length)]);
}

function logOutBand() {
    const bands = ['Okean Elzy', 'Beatles', 'Nothing but Thieves', 'Boombox', 'Kaleo'];
    console.log(bands[getRandomInt(bands.length)]);
}

const array = [logOutColor, logOutFruit, logOutBand];

array.forEach(el => el());

// Create a function as a const and try creating a function normally. Call both functions.

const favoriteIceCreamFlavour = function() {
    const flavours = ['Creamy', 'Pistachio', 'Vanilla', 'Licorice', 'Stracciatella'];
    const base = ['strawberry', 'vibes', 'cloud', 'sorbet', 'chocolate'];
    console.log(flavours[getRandomInt(flavours.length)] + " " + base[getRandomInt( base.length)]);
}

function add(a, b) {
    return a + b;
}

favoriteIceCreamFlavour();
console.log(add(520, 380));

// Create an object that has a key whose value is a function. Try calling this function.

const convertCelciusToKelvin = {
    kelvin: 273.15,
    celsius: function(c) {
        return c + this.kelvin;
    }
}
console.log(convertCelciusToKelvin.celsius(5));