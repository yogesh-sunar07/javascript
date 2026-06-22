// function myName(){
//     console.log("y");
//     console.log("o");
//     console.log("g");
//     console.log("e");
//     console.log("s");
//     console.log("h");
    
// }
// myName()
// // function addTwoNumber(a,b){//parameters
// //     console.log(a+b);
    
// // }
// // addTwoNumber(3,9)//argument 
// // console.log(addTwoNumber(3,5)); //undefine
// function add2Number(a,b){
//     console.log(a+b);
    
// }
// const result = add2Number(3,9)
// console.log("Result:", result); //undefine cuz function return nothing 

// function mutiplyTwoN(a,b){
 
//   return a*b
// }

// const  fesult = mutiplyTwoN(3,5)
// console.log("result", fesult);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name ");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("yogesh"));
console.log(loginUserMessage());//undefined just login

// function calculateCartPrice(...num1){//jati number attribute bata pathaya ni array ko form ma linxa
function calculateCartPrice(val1, ...num1){
    return num1
}
// console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "yogesh",
    price : 99
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({

    username : "ram",
    price : 100
})

const myNewArray = [200,300,100,600]
function returnsecondValue(getArray){
    return getArray[3]
}
// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([500,9,6,0]));
