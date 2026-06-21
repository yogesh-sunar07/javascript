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
