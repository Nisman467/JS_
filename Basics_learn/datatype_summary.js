// *Note* : JS is a dynamically typed language, it means we dont need to define a variable type

/*
Primitive datatype
7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //both returns the same symbol but they are different

// to define a bigInt we need to add n at the end of the number value
const bigNumber = 1112345678909867876878123n


/*
Reference(Non-Primitive datatype)

3 types: Array, Object, Function

*/

let myFamily = ["Neuron", "Reyhman", "Sans"]

let myself = 
{
    name : "Neuron",
    age : 21,
    address : "Nepal",
    marks : 21.5,
}

// function treat as variable
let myFunction = function(){
    console.log("Hellow World JS");
}

console.log(typeof bigNumber)
console.log(typeof myFunction)