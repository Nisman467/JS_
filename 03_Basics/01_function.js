function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("U");
    console.log("R");
    console.log("O");
    console.log("N");
    console.log("E");
}

// sayMyName ;this means it is a function reference

sayMyName() // this is actual caling a function

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    
}

addTwoNumbers(4, 5)
addTwoNumbers(4, "5")
addTwoNumbers(4, null)


function addNumbers(num1, num2){
    return(num1 + num2)
    
}

const result = addNumbers(4, 5)
console.log("Result = ", result);


function loginUserMessage(username){
    if (username) {
        // also we can use; if(username === undefined)
        return `${username} logged in.`
    }
    else{
        return `No user logged in.`
    }
}

// console.log(loginUserMessage("Nisman"));

let display = loginUserMessage("Nisman")
console.log(display);


console.log(loginUserMessage());


// can also add a default value to the function parameters
function userLoggedMessage(username = "Sam"){ 
    return `${username} logged in.`
}
console.log(userLoggedMessage());
console.log(userLoggedMessage("Neurone"));


// ... is known as rest operator and also spread operator, depends on how it is being used
function calculateCartPrice(...nums){
    return nums
}

console.log(calculateCartPrice(200, 400, 500)); // return a array

let array = calculateCartPrice(300, 400, 500, 600)
console.log(array);


// now for adding we can simply add the arrays

let total = 0
for (let i = 0; i < array.length; i++) {
    total = total + array[i];
    
}

console.log(`The total price: ${total}`);



// to use a object through a function
const user = {
    username: "Nisman",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username : ${anyObject.username}\nPrice : ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username : "Neurone",
    price : 200
})

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));