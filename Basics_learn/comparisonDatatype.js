let value1, value2
value1 = 3
value2 = 1
console.log(value1 > value2);
console.log(value1 >= value2);
console.log(value1 < value2);
console.log(value1 <= value2);
console.log(value1 == value2);
console.log(value1 != value2);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null != 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined != 0);
console.log(undefined >= 0);

// *Note: Above conversion must be avoided.

// === (strict check) also check the datatypes
console.log("2" == 2);
console.log("2" === 2);
