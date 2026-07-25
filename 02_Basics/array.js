// // array can be declared as variables or object using new

// const arr = [0, 1, 2, 3, 4, 5]

// console.log(arr[0]);


const bikes = new Array("Ducati", "Kawasaki", "CF MOTO", "Yamaha")

// console.log(bikes[1]);


// //Array Method
// bikes.push("Honda")
// bikes.push("Puslar")
// console.log(bikes); //array bikes is changed

// bikes.pop()
// console.log(bikes);

// bikes.unshift("Hyundai") //unshift() -> adds the data at initial position of the array i.e. bikes[0]
// console.log(bikes);

// bikes.shift() //removes the first elements of array
// console.log(bikes);

// console.log(bikes.includes(0)); //includes return true or false; whether that array includes or not 
// console.log(bikes.includes("Ducati")); 

// console.log(bikes.indexOf("Ducati")); 
// console.log(bikes.indexOf("Yamaha")); 


const newVehicles = bikes.join() //this joins the array as well as it changes the type into string 
console.log(newVehicles);
console.log(bikes);
console.log(typeof newVehicles);


//slice and splice

const newArray = new Array(0, 1, 2, 3, 4, 5)

console.log("A ", newArray); //Original array

const n1Array = newArray.slice(1, 3)
console.log("B ", n1Array); //slice array; slice() includes the elements from given range to n-1 range i.e. 1 to 2 from newArray to n1Array

const n2Array = newArray.splice(1, 3) // splice() includes both the lower and upper range but changes the original array. After splice(), the array doesnt contain the elements which were splice()
console.log("C ", n2Array);
console.log("A' ", newArray);


