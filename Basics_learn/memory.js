/* 
There are two types of memory in JS.
1. Stack (Primitive) : all the primitive datatypes use a stack, the copy a variable is used.
2. Heap (Non-Primitive) : all the non-primitve datatypes use a heap, the actual variable is used.
*/

//Stack 
let myCollege = "Advance College of Engineering and Management"
let engineeringCollege = myCollege

console.log(myCollege);
console.log(engineeringCollege);

engineeringCollege = "Kantipur Enginnering College"

//same as the regular variables concept
console.log(myCollege);
console.log(engineeringCollege);

//Heap
let myCar = {
    carName : "Creta",
    carBrand : "Honda"
}

let anotherCar = myCar

console.log(myCar.carName);
console.log(anotherCar.carName);

anotherCar.carName = "Scorpio"

// Both the values will be change to Scorpio
console.log(myCar.carName);
console.log(anotherCar.carName);