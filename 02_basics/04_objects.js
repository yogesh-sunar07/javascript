//singloton
// const tinderUser = new Object()// this is singleton object


//this is non singeton objcts 
const tinderUser={}

tinderUser.id ="123hdhd"
tinderUser.name ="yogesh"
tinderUser.isLoggedIn = false // add data inside objects 

console.log(tinderUser);

const regularUser ={
    email: "ram@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ram",
            lastname: "sunar"

        }
    }
}
console.log(regularUser.fullname?.userfullname.lastname);//question marks protect if there is no fullname 

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1,obj2}this is wrong 
// console.log(obj3);

const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2)//{}= target //obj1,2,3=source
const obj5 = {...obj1,...obj2}//spread operator or mrthod
console.log(obj3);
console.log(obj4);
console.log(obj5);

// how data come form database 

const user = [
    {
        id: 1,
        email: "ram@gmail.com"
    },
    {

    },
    {

    }
]
console.log(user[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));// is there any key of these name in the object or not it is only asking process
