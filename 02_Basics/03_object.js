// singleton -> Object.create



//object literals

// Symbol variable
const mySym = Symbol("Key1")

const JsUser = {
    name : "Nisman",
    "full name" : "Neurone Shrestha",
    [mySym]: "myKey1",
    age : 20,
    location : "Nepal",
    email: "neurone@gamil.com",
    isLoggedIn: false,
    lastLoginDay: ["Sunday", "Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])


console.log(JsUser["full name"])
// console.log(JsUser."full name"); this is wrong

console.log(JsUser)


JsUser.email = "neurone@chatgpt.com"

// Object.freeze(JsUser) //this doesnot allow any changes in object 

JsUser.name = "Neurone" // so there is not change in name 

console.log(JsUser.email)
console.log(JsUser.name)



JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());


