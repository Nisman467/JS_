let score = 21
console.log(typeof score)

// cont {score} = req.body; to get an input form the users

score  = "21aabb"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


//value for null is given as 0
score = null
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//for undefined
score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // returns NaN

//for boolean value
score = false
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // returns 1 if true and 0 if false


//"33" => 33
// "21aabb" => NaN
// true => 1, false => 0

let isLoggedIn = 1

let boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn)

//empty string
isLoggedIn = ""

boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn)

//Non-empty string
isLoggedIn = "Neuron"

boleanIsLoggedIn = Boolean(isLoggedIn)
console.log(boleanIsLoggedIn)

//Note* : 1 => true, 0 => false
// "" => false
// "Neuron" => true


let someNumber = 21

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

