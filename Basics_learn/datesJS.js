let myDate = new Date()

console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());
console.log(typeof myDate.toISOString());

console.log(myDate.toJSON());
console.log(typeof myDate.toJSON()); // toJSON() calls the toISOString() and returns the result

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toUTCString());

console.log(myDate.getTimezoneOffset()); //return the difference in minutes between the UTC and local host system


let myCreatedDate = new Date(2006, 1, 14) //month -> 0 = Jan, 1 = Feb, 2 = Mar,...
let myCreatedDate = new Date(2006, 1, 14, 12, 3)
let myCreatedDate = new Date("2006-02-14")
let myCreatedDate = new Date("02-14-2006")
console.log(myCreatedDate.toLocaleString());


// to develop a poles, quizes
let myTimeStamp = Date.now() //returns values in millisecond
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// both returns time in millisecond where we can compare both easily in millisecond; more effectively

console.log(Math.floor(Date.now()/1000)); // in seconds



let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

// another way to display the time
let displaying = `Todays Date is \n${newDate.getFullYear()}/${newDate.getMonth()+1}/${newDate.getDate()}`
console.log(displaying);


let time1 = newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
})

console.log(time1);
