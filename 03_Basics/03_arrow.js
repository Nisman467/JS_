const user = {
    username : "Neurone",
    bookPrice : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// arrow function
function one(){
    let username = "Neurone"

    // console.log(this); 


    // console.log(this.username); "this" operator cannot be used in functions, it is only used in objects
}
one()


const one = function(){
    let username = "Neurone"

    console.log(this);
    
}

one() // ; same as before functions

// method to declare the arrow function
const one = () => {
    let username = "Neurone"

    console.log(this.username);
    console.log(this);
    
}
one()



const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(3, 4))



// implicit return
const add = (num1, num2) => (num1 + num2)

console.log(add(3, 4))