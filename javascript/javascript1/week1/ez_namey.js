let firstWords = ["Apple", "Orange", "Cherry", "Pineapple", "Coconut", "Kiwi", "Pear", "Rubarb", "Blueberry", "Cranberry"];
let secondWords = ["store", "tech", "corp", "ltd", "box", "craft", "net", "time", "aroma", "boom"];
const firstRandomIndex = Math.floor(Math.random() * 10) + 0;
const secondRandomIndex = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[firstRandomIndex] + " " + secondWords[secondRandomIndex];
console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters.");