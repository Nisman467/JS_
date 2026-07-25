// array can be declared as variables or object using new

const arr = [0, 1, 2, 3, 4, 5]

console.log(arr[0]);


const bikes = new Array("Ducati", "Kawasaki", "CF MOTO", "Yamaha")

console.log(bikes[1]);


//Array Method
bikes.push("Honda")
bikes.push("Puslar")
console.log(bikes); //array bikes is changed

bikes.pop()
console.log(bikes);

bikes.unshift("Hyundai") //unshift() -> adds the data at initial position of the array i.e. bikes[0]
console.log(bikes);
