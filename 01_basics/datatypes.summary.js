// primitive 
// 7 type : string, Number, Boolearn, Null,undefine, Symbol, BingInt

//reference type (non primitive)

// array, Objects, functions

const score = 100 ;
const scrreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
// var userEmail = Undefined ;

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id===anotherId);


const bigNumber = 389798327983729n
console.log(typeof (bigNumber));

const heros =["spiderman", "venom", "drstrange"] //arrays


const user ={
     name:"ram",
     age:25,
     isLoggedIn: true
}; // objects 


//Function Expression.

/*What's happening here?
function() { ... } creates an anonymous function (a function without a name).
const myFunction = ... stores that function in the variable myFunction. */
const myFunction = function(){
    console.log("hello world");   
}

myFunction();
