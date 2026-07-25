const bikes = ["MT", "NS", "R1", "RS"]
const cars = ["Creta", "Scorpio", "Civic"]

bikes.push(cars) //push the array inside a array
console.log(bikes);
console.log(bikes[4]);// here the cars array is set as element inside a bikes array

// concat(); actually joins the two arrays as a new arrays
const vehicles = bikes.concat(cars)
console.log(vehicles);

const newVehicles = [...bikes, ...cars] //... means spread which release all the elements from array and keep it to another array as its elements
console.log(newVehicles);


// the nested array can be converted into the single array using a flat()
const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const new_arr = arr.flat(Infinity)
console.log(arr);
console.log(new_arr);


//check is array ?
console.log(Array.isArray(arr));
console.log(Array.isArray("Nisman"));
console.log(Array.from("Nisman")); // from() converts into array
console.log(Array.from({name : "Nisman"})); // we have to specify what to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of is like concatenating the multiple variable values as single array

