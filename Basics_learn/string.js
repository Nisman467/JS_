// In JS, string is not a array, its object here.

const name = "Nisman"
const github = 467

// console.log(name + github); outdated concept for displaying 

console.log(`My github user name is ${name + github}`);

// another way to declare a string
const gameName = new String('Call of duty: Modern Warefare')

console.log(`My favourite game is ${gameName}`);
console.log(gameName[0])
console.log(gameName.__proto__); // to access the prototypes of a string in js, not only this we can directly access the prototype

console.log(gameName.length); // to display the len of the string

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5)); // at an index which character is there.

console.log(gameName.indexOf('M')); // a character is in which index


const myBike = "CF-MOTO: MT-450"
console.log(myBike.substring(0, 7)); // substring(starting, ending)

const anotherBike = myBike.slice(-14, 7) // slice can also use the negative avlue where it starts from reverse
console.log(anotherBike);

// to ignore the unwanted spaces
const unwantedSpace = "   Neuron      "
console.log(unwantedSpace);
console.log(unwantedSpace.trim()); //trim() ignores the spaces


// to replace the string from the url then replace(what to replace, by which to replace)
const url = "https://github.com/Nisman%20/JS_"
console.log(url.replace('%20', '467'))


//include(string) use to find is the specified string is included in any string variable
console.log(url.includes('Nisman'))
console.log(url.includes('Neuron'))


//split(charater/symbol) use to separate the strings
console.log(myBike.split('-')) // makes the arrays
let bike = myBike.split('-')
console.log(bike[2])