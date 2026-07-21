// ----------Numbers---------------
const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 21.2633;
const anotherNumber = 121.8633;
console.log(otherNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(3));

const hundred = 10000000;
console.log(hundred.toLocaleString('ne-NP'))
// ne-NP --> Nepali currency representation
// en-IN --> Indian currrency
// by default --> American currency

console.log(Number.MAX_VALUE); // maximum length of the digits can be stored in Number
console.log(Number.MIN_VALUE); // similarly, minimum digits 


// -------------Maths----------------
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(23.555));
console.log(Math.ceil(23.4)); // gives always a upper values
console.log(Math.floor(23.999)); // gives always a lower values
console.log(Math.min(4, 5, 6, 7, 3, 1, 2));
console.log(Math.max(4, 5, 6, 7, 8, 9));

console.log(Math.random()); // gives a random values from 0 to 1
console.log(Math.random()*10); // to give more values than 0 or 1

console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

// (randomValue * (max - min + 1)) + min; always gives the value between max and min
let values = Math.floor(Math.random() * (max - min + 1))
console.log(values + min);

