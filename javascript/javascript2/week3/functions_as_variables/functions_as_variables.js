// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

function logOutColor() {
    const colors = ['red', 'yellow', 'blue', 'green', 'coral'];
    console.log(colors[Math.floor(Math.random() * colors.length)]);
}

function logOutFruit() {
    const fruits = ['cherry', 'pear', 'apple', 'apricot', 'persimmon'] //хурма
    console.log(fruits[Math.floor(Math.random() * fruits.length)]);
}

function logOutBand() {
    const bands = ['Okean Elzy', 'Beatles', 'Nothing but Thieves', 'Boombox', 'Kaleo'];
    console.log(bands[Math.floor(Math.random() * bands.length)]);
}

const array = [logOutColor, logOutFruit, logOutBand];

array.forEach(el => el());

// Create a function as a const and try creating a function normally. Call both functions.

const favoriteIceCreamFlavour = function() {
    const flavours = ['Creamy', 'Pistachio', 'Vanilla', 'Licorice', 'Stracciatella'];
    const base = ['strawberry', 'vibes', 'cloud', 'sorbet', 'chocolate'];
    console.log(flavours[Math.floor(Math.random() * flavours.length)] + " " + base[Math.floor(Math.random() * base.length)]);
}

function add(a,b) {
    return a+b;
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