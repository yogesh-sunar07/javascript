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
