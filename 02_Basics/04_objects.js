// singleton

const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userFullName : {
            firstName: "Neurone",
            lastName: "Shrestha"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastName);
// we can also use: console.log(regularUser.fullname?.userFullName.lastName); fullname? means if fullname exists use this else directly go to userFullName



// merging the objects 
const obj1 = {1: "a", 2 :"b"}
const obj2 = {3: "a", 4 :"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


// when data comes from databases -> array of objects
const users = [
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// hasOwnProperty is use to determine whether the variable or property or key exists in the given object
console.log(tinderUser.hasOwnProperty("Fullname"));


// console.log(users[0].email);
