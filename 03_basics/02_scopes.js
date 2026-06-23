// let a= 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "yogesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    //two()
    console.log(username);
    
    
}
one()


if(true){
    const username = "yogesh"
    if (username === "yogesh"){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//outsude the scope 
       
}
// console.log(username);// outside the scope

function addone(num){
    return num+1
}
const result = addone(5)
console.log(result);

// console.log(addTwo(6));////writing in upper give error c
// another way to declere function where function is hold in a varibale 
const addTwo =  function(num){
    return num+2
}
console.log(addTwo(6));
