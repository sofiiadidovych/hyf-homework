'use strict'
const numbers = [1, 2, 3, 4];

const filtered = numbers
    .filter(n => (n % 2 !== 0))
    .map(n => n * 2);

console.log(filtered);