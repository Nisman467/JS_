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
